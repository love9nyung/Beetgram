import axios from "axios";

const api = axios.create({
  baseURL: "http://3c395715755a.ngrok.io/",
  headers: { Authorization: localStorage.getItem("token") },
});

export const LoginApi = (data, history) => {
  console.log("login");
  api.post("login", data).then((res) => {
    const { access_token } = res.data;
    console.log(1);
    console.log(access_token);
    console.log(res.data);
    localStorage.setItem("token", access_token);
    history.replace("/home");
  });
};
export const signupApi = (data) => {
  api.post("sign-up", data);
};

export const DetailApi = (
  img_no1,
  setUrl,
  setUser,
  setLike,
  setThumb,
  serType
) => {
  api.post("home/detail", { img_no: img_no1, type: serType }).then((res) => {
    const data1 = res.data.img_info;
    console.log(data1);
    setUrl(data1.img_url);
    setUser(data1.user_id);
    setLike(res.data.like_or_unlike);
    setThumb(data1.profile_thum);
  });
};

export const likeApi = (dataImgNo, like, setLike) => {
  api
    .get("like/" + dataImgNo)
    .then((res) => {
      if (res !== 200) {
        if (like === 1) setLike(0);
        else setLike(1);
      }
    })
    .catch((reason) => {
      console.error(reason);
    });
};

export const HomeApi = (dispatch, setData, Tagged) => {
  console.log("HomeApi");
  const tags = Tagged;
  api.post("home", { tags }).then((res) => {
    const loading = false;
    const data1 = res.data.img_info;
    console.log(data1);
    console.log(res.data.tag_list);
    dispatch({
      type: "ADD_SEARCH",
      tag: res.data.tag_list,
    });
    setData(loading, data1);
  });
};
export const HomeApi1 = (dispatch, Tagged) => {
  console.log("HomeApi");
  const tags = Tagged;
  if (tags === []) {
    api.post("home", { tags }).then((res) => {
      localStorage.setItem("data1", JSON.stringify(res.data.img_info));

      dispatch({
        type: "ADD_SEARCH",
        tag: res.data.tag_list,
        tagT: [],
      });
    });
  } else {
    api.post("home", { tags }).then((res) => {
      localStorage.setItem("data1", JSON.stringify(res.data.img_info));
    });
  }
};

export const PubApi = (dispatch, setData1, setLoading, Tagged) => {
  const tags = Tagged;
  api.post("public", { tags }).then((res) => {
    const data1 = res.data.img_info;
    dispatch({
      type: "ADD_SEARCH",
      tag: res.data.tag_list,
    });
    setData1(data1);
    setLoading(false);
  });
};

export const LikePageApi = (setData1, setLoading) => {
  api.get("likeimage").then((res) => {
    const data1 = res.data.img_info;
    setData1(data1);
    setLoading(false);
  });
};
