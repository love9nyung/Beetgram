import axios from "axios";
import React, { useState } from "react";
import { GiHandheldFan } from "react-icons/gi";
import { Link, useHistory } from "react-router-dom";
import { login } from "../api";
import { ACCESS_TOKEN, API_BASE_URL, baseURL } from "../index";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !userPw) {
      return alert("아이디와 비밀번호를 입력해주세요.");
    }
    try {
      const data = {
        user_id: userId,
        user_pw: userPw,
      };

      axios.post(API_BASE_URL + "/login", data).then((res) => {
        console.log(res);
        const { access_token } = res.data;
        const status = res.status;
        localStorage.setItem("token", access_token);
        localStorage.setItem("status", status);

        console.log(localStorage.getItem("token"));
        history.replace("/home");
      });
    } catch (err) {
      alert("로그인에 실패했습니다.");
      setUserId("");
      setUserPw("");
      console.error("login error", err);
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
      <button onClick={handleSubmit}>Login</button>
      <Link to="/join">회원가입</Link>
    </div>
  );
};
export default Login;
