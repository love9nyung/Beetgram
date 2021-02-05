import React from "react";
import HomePresenter from "./HomePresenter";
import axios from "axios";

import { ACCESS_TOKEN, API_BASE_URL, baseURL } from "../../index";
// Container의 역할 : Application에서 사용되어지는 기능(함수), 상태(state), 이벤트 등을
// 구현 하고, Presenter에 전달

export default class poo extends React.Component {
  // 클래스형 컴포넌트에서 state 만들기
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
    thum_url: null,
  };
  // constructor : 클래스 생성자
  //   생성자의 매개변수로 부모 컴포넌트의 props가 들어온다.
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
  }

  // 컴포넌트가 부모 컴포넌트에 마운트 됐을 때 호출되는 함수
  // useEffect(()=>{}, [])와 같다.

  // useEffect 에서의 비동기처리와는 다르게, 클래스형 컴포넌트의 componentDidMount에서의
  // 비동기 처리는 앞에 async 키워드를 붙여주면 된다
  async componentDidMount() {
    console.log(localStorage.getItem("token"));
    axios
      .post(
        API_BASE_URL + "/home",
        { tags: [] },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
      .then((res) => {
        const data1 = res.data.img_info;
        console.log(data1);
        this.setState({
          data1,
        });
        // const data1 = res.json().data.img_info;
        // console.log(data1["thum_url"]);
      });
    try {
      // data -> results에 원하는 내용이 있었음
      // { data : { results : [{},{},{}...]} }
      // data안에 있는 results에 들어있는 값을 nowPlaying 변수에 넣겠다.
    } catch (error) {
      this.setState({
        error: "영화 정보를 찾을 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  // 함수형 컴포넌트에서 return에 해당된다.
  render() {
    const { loading, data1 } = this.state;

    return (
      <>
        <HomePresenter loading={loading} data1={data1}></HomePresenter>
      </>
    );
  }
}
