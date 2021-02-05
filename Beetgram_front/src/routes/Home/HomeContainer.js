import React, { useContext, useState, useEffect, useCallback } from "react";
import { homeApi } from "../../context/contact/ContactState";
import Loader from "../../components/Loader";
import contactContext from "../../context/contact/contactContext";
import HomePresenter from "./HomePresenter";
import api from "../../context/api";
import axios from "axios";

// Container의 역할 : Application에서 사용되어지는 기능(함수), 상태(state), 이벤트 등을
// 구현 하고, Presenter에 전달
const HomeContainer = () => {
  const ContactContext = useContext(contactContext);
  const { tagged, loading, base_data, homeApi, clearTagged } = ContactContext;

  const [data2, setData] = useState();
  useEffect(() => {
    console.log(111);
    console.log(base_data);
    homeApi(base_data, setData);

    return () => {
      clearTagged();
    };
  }, []);
  console.log(423424);
  console.log(data2);
  return (
    <>
      <HomePresenter
        loading={loading}
        data1={base_data.img_info}
      ></HomePresenter>
    </>
  );
};

export default HomeContainer;
