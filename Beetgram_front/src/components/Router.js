import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Public from "../routes/Public";
import Home from "../routes/Home";
import Like from "../routes/Like";
import Login from "./Login";
// import Login from "../routes/Login";

// 오로지 라우터만 관리하는 컴포넌트가 될 것이다.

const RouterB = () => {
  console.log("Router");
  return (
    <Router>
      {/* {localStorage.getItem("status") === 200 ? (
          <Redirect to="/home" />
        ) : (
          <Redirect to="/" />
        )} */}
      <>
        <Header />
        {/* 기본적으로 Switch가 없이 라우터를 배치하면 모든 라우터를 탄다.
        Switch를 활용하면 오로지 하나의 라우터만 타게 된다.
      */}
        <Switch>
          <Route path="/home" component={Home} />
          {/* <Route path="/login" exact component={Login} /> */}
          <Route path="/public" component={Public} />
          <Route path="/like" component={Like} />
          <Route exact path="/" component={Login} />;
        </Switch>
      </>
    </Router>
  );
};

export default RouterB;
