import React from "react";
import { moviesApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class goo extends React.Component {
  // 생성자에서 할 일
  //  영화 상세 페이지를 표현해야 하는지 설정
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      loading: true,
    };
  }

  async componentDidMount() {
    // id 가지고 오기 -> match.params
    // 만약에 id가 안들어오면 HOME으로 강제 이동 -> history의 push함수가 해준다.
    // 사용자의 요청을 서버가 받고, 재요청 하도록 하는 것을 redirect라고 한다.

    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const parsedId = parseInt(id);

    // 올바르지 않은 id라면
    if (isNaN(parsedId)) {
      // Home으로 redirect
      return push("/");
    }

    let result = null;

    ({ data: result } = await moviesApi.movieDetail(parsedId));

    this.setState({ loading: false, result });
  }

  // 함수형 컴포넌트에서 return에 해당된다.
  render() {
    const { result, loading } = this.state;

    return <DetailPresenter result={result} loading={loading} />;
  }
}
