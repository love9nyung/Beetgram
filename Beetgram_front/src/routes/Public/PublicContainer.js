import React, { useContext, useState, useEffect } from "react";
import PublicPresenter from "./PublicPresenter";
import { tagDispatch } from "../../components/App";
import { PubApi } from "../../api";

// Container의 역할 : Application에서 사용되어지는 기능(함수), 상태(state), 이벤트 등을
// 구현 하고, Presenter에 전달
const PublicContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data1, setData1] = useState();
  const { dispatch, tags, Tagged } = useContext(tagDispatch);
  useEffect(() => {
    PubApi(dispatch, setData1, setLoading, Tagged);
    return () => {
      tags.length = 0;
      Tagged.legth = 0;
    };
  }, [Tagged]);
  try {
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <PublicPresenter loading={loading} data1={data1}></PublicPresenter>
    </>
  );
};

export default PublicContainer;
