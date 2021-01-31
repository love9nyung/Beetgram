import React, { useState, useEffect } from "react";
import LikePresenter from "./LikePresenter";
import { LikePageApi } from "../../api";

// Container의 역할 : Application에서 사용되어지는 기능(함수), 상태(state), 이벤트 등을
// 구현 하고, Presenter에 전달
const LikeContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data1, setData1] = useState();
  useEffect(() => {
    LikePageApi(setData1, setLoading);
  }, []);
  try {
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <LikePresenter loading={loading} data1={data1}></LikePresenter>
    </>
  );
};

export default LikeContainer;
