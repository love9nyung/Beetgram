import axios from "axios";

const api = axios.create({
  baseURL: "http://6b080d8094fc.ngrok.io/",
  headers: { Authorization: localStorage.getItem("token") },
});

export const LoginApi = (data, history) => {
  console.log("login");
  api.post("login", data).then((res) => {
    const { access_token } = res.data;
    console.log(1);
    console.log(access_token);
    console.log(res.data);
    localStorage.setItem("token", { access_token });
    history.replace("/home");
  });
};

export const DetailApi = (img_no1, setUrl, setUser, setLike, setThumb) => {
  api.post("home/detail", { img_no: img_no1, type: "S" }).then((res) => {
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

export const HomeApi = (tags, dispatch, setData1, setLoading) => {
  console.log(111);
  //   const tag1 = {
  //     aaa: 333,
  //     bbb: 222,
  //     ccc: 111,
  //   };

  //   dispatch({
  //     type: "ADD_SEARCH",
  //     tag: tag1,
  //   });

  api.post("home", { tags }).then((res) => {
    if (res.data.tag_list) tags = res.data.tag_list;
    const data1 = res.data.img_info;
    console.log(res.data);
    console.log(111222);
    dispatch({
      type: "ADD_SEARCH",
      tag: res.data.tag_list,
    });
    console.log(dispatch);
    setData1(data1);
    setLoading(false);
  });
};

export const PubApi = (tags, dispatch, setData1, setLoading) => {
  api.post("public", { tags }).then((res) => {
    if (res.data.tag_list) tags = res.data.tag_list;
    const data1 = res.data.img_info;
    console.log(res.data);
    console.log(111222);
    dispatch({
      type: "ADD_SEARCH",
      tag: res.data.tag_list,
    });
    console.log(dispatch);
    setData1(data1);
    setLoading(false);
  });
};

export const LikePageApi = (tags, dispatch, setData1, setLoading) => {
  api.get("likeimage").then((res) => {
    if (res.data.tag_list) tags = res.data.tag_list;
    const data1 = res.data.img_info;
    dispatch({
      type: "ADD_SEARCH",
      tag: res.data.tag_list,
    });
    console.log(dispatch);
    setData1(data1);
    setLoading(false);
  });
};
