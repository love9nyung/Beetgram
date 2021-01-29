import React, { useContext, useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { tagDispatch } from "../../components/App";
import { HomeApi } from "../../api";

// Container의 역할 : Application에서 사용되어지는 기능(함수), 상태(state), 이벤트 등을
// 구현 하고, Presenter에 전달
const HomeContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data1, setData1] = useState();
  const { dispatch, tags, Tagged } = useContext(tagDispatch);
  console.log(Tagged);
  console.log(tags);
  useEffect(() => {
    HomeApi(tags, dispatch, setData1, setLoading, Tagged);
    return () => {
      tags.length = 0;
      Tagged.legth = 0;
      console.log(tags);
    };
  }, [tags]);
  try {
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <HomePresenter loading={loading} data1={data1}></HomePresenter>
    </>
  );
};

export default HomeContainer;
