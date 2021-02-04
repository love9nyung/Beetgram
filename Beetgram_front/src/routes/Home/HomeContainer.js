import React, { useContext, useState, useEffect, useCallback } from "react";
import HomePresenter from "./HomePresenter";
import {
  tagDispatch,
  taggedDispatch,
  tagsDispatch,
} from "../../components/App";
import { HomeApi, HomeApi1 } from "../../api";

// Container의 역할 : Application에서 사용되어지는 기능(함수), 상태(state), 이벤트 등을
// 구현 하고, Presenter에 전달
const HomeContainer = () => {
  const [loading, setLoading] = useState(false);

  const { dispatch, Tagged } = useContext(tagsDispatch);
  // const { Tagged } = useContext(taggedDispatch);
  //const { tagDispatch, Tagged } = useContext(taggedDispatch);

  let data1 = [];
  useEffect(() => {
    HomeApi1(dispatch, Tagged);

    try {
    } catch (error) {
      console.log(error);
    }

    return () => {
      // dispatch({
      //   type: "DEL_SEARCH",
      //   tag: {tags : [],
      //   Tagged:[]},
      // });
    };
  }, [Tagged, dispatch]);
  data1 = JSON.parse(localStorage.getItem("data1"));
  console.log(data1);
  return (
    <>
      <HomePresenter loading={loading} data1={data1}></HomePresenter>
    </>
  );
};

export default HomeContainer;

// import React, { useContext, useState, useEffect, useCallback } from "react";
// import HomePresenter from "./HomePresenter";
// import { tagDispatch } from "../../components/App";
// import { HomeApi } from "../../api";

// // Container의 역할 : Application에서 사용되어지는 기능(함수), 상태(state), 이벤트 등을
// // 구현 하고, Presenter에 전달
// const HomeContainer = () => {
//   const [loading, setLoading] = useState(true);
//   const [data1, setData1] = useState();
//   const { dispatch, Tagged } = useContext(tagDispatch);

//   const setData = (loading, data) => {
//     setData1(data);
//   };

//   useEffect(() => {
//     HomeApi(dispatch, setData, Tagged);

//     try {
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }

//     return () => {
//       // dispatch({
//       //   type: "DEL_SEARCH",
//       //   tag: {tags : [],
//       //   Tagged:[]},
//       // });
//     };
//   }, []);

//   return (
//     <>
//       <HomePresenter loading={loading} data1={data1}></HomePresenter>
//     </>
//   );
// };

// export default HomeContainer;

// import React, { useContext, useState, useEffect, useCallback } from "react";
// import HomePresenter from "./HomePresenter";
// import { tagDispatch } from "../../components/App";
// import { HomeApi } from "../../api";

// // Container의 역할 : Application에서 사용되어지는 기능(함수), 상태(state), 이벤트 등을
// // 구현 하고, Presenter에 전달
// const HomeContainer = () => {
//   console.log("1");
//   const [loading, setLoading] = useState(true);
//   console.log("2");
//   const [data1, setData1] = useState();
//   console.log("3");
//   const { dispatch, Tagged } = useContext(tagDispatch);
//   console.log("4");

//   const setData = (loading, data) => {
//     console.log("5");
//     setLoading(loading);
//     console.log("6");
//     setData1(data);
//     console.log("7");
//   };
//   console.log("8");
//   useEffect(() => {
//     console.log("9");
//     HomeApi(dispatch, setData, Tagged);
//     console.log("10");
//     return () => {
//       // dispatch({
//       //   type: "DEL_SEARCH",
//       //   tag: {tags : [],
//       //   Tagged:[]},
//       // });
//     };
//   }, []);
//   console.log("11");
//   try {
//   } catch (error) {
//     console.log(error);
//   }
//   return (
//     <>
//       {console.log("12")}
//       <HomePresenter loading={loading} data1={data1}></HomePresenter>
//     </>
//   );
// };

// export default HomeContainer;
