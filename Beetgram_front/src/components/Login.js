import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginApi, signupApi } from "../api";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const history = useHistory();

  const signIn = async (e) => {
    e.preventDefault();
    if (!userId || !userPw) {
      return alert("아이디와 비밀번호를 입력해주세요.");
    }
    try {
      const data = {
        user_id: userId,
        user_pw: userPw,
      };
      LoginApi(data, history);
    } catch (err) {
      alert("로그인에 실패했습니다.");
      setUserId("");
      setUserPw("");
      console.error("login error", err);
    }
  };

  const signUp = async (e) => {
    e.preventDefault();
    if (!userId || !userPw) {
      return alert("아이디와 비밀번호를 입력해주세요.");
    }
    try {
      const data = {
        user_id: userId,
        user_pw: userPw,
      };
      signupApi(data);
    } catch (err) {
      alert("로그인에 실패했습니다.");
      setUserId("");
      setUserPw("");
      console.error("sign up error", err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name="user_id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="id"
      />
      <input
        type="password"
        name="user_pw"
        value={userPw}
        onChange={(e) => setUserPw(e.target.value)}
        placeholder="pw"
      />
      <button onClick={signIn}>Login</button>
      <button onClick={signUp}>회원가입</button>
    </div>
  );
};
export default Login;
