import React, { useState } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Picture from "../../components/Picture";
import axios from "axios";
import { API_BASE_URL } from "../..";

const Container = styled.div`
  padding: 20px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
`;

// Presentor의 역할 : Container으로 부터 받은 각종 이벤트나 상태 등을 화면에 적용 시키는 역할

const HomePresenter = ({ loading, data1 }) => {
  const [img, setImage] = useState(null);
  console.log(data1);
  const onChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onClick = async () => {
    const formData = new FormData();
    formData.append("file", img);
    // 서버의 upload API 호출
    await axios.post(
      API_BASE_URL + "/home/upload",
      {
        upload_image: formData,
      },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
  };
  return (
    <>
      <Helmet>
        <title>Beetgram</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Menu>
            {" "}
            <input
              type="file"
              accept="image/jpg,impge/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
            />
            <button onClick={onClick}> 업로드 </button>
            <button> 삭제 </button>
          </Menu>
          <Container>
            {data1 && data1.length > 0 && (
              <Section title="현재 상영작">
                {data1.map(
                  (i) =>
                    i.thum_url && (
                      <Picture
                        key={i.img_no}
                        reg_date={i.reg_date}
                        imageUrl={i.thum_url}
                        img_no={i.img_no}
                      />
                    )
                )}
              </Section>
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default HomePresenter;
