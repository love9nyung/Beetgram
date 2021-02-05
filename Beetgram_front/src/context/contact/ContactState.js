import React, { useReducer } from "react";
import Loader from "../../components/Loader";
import HomePresenter from "../../routes/Home/HomePresenter";
import api from "../api";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

const ContactState = (props) => {
  // React component 이름은 대문자로 시작
  const initialState = {
    tagged: [],
    base_data: [], // { tag_list, user_no, img_info }
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const homeApi = async (base_data, setData, setLoading) => {
    try {
      api.post("home", { tags: [] }).then((res) => {
        dispatch({
          type: "ADD_DATA",
          payload: res.data, //{ tag_list, user_no, img_info }
        });
        // setData(res.data.img_info);
      });
    } catch (err) {
      console.log(err);
      //   dispatch({
      //     type: "CONTACT_ERROR",
      //     payload: err.response.msg,
      //   });
    }
  };
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };
  const addTagged = (base_data) => {
    dispatch({ type: "ADD_TAGGED", payload: base_data.tag_list });
  };
  const clearTagged = () => {
    dispatch({ type: "CLEAR_TAGGED" });
  };
  const toggleTagged = (tag_no) => {
    dispatch({ type: "TOGGLE_TAGGED", payload: tag_no });
  };

  return (
    <contactContext.Provider
      value={{
        tagged: state.tagged,
        base_data: state.base_data,
        loading: state.loading,
        error: state.error,
        homeApi,
        addTagged,
        clearTagged,
        toggleTagged,
        setLoading,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
