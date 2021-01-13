import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Overlay from "react-overlay-component";
import axios from "axios";
import { API_BASE_URL } from "..";
import { GiBeet } from "react-icons/gi";
const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  content: url("${({ bgUrl }) => bgUrl}");
  height: auto;
  width: 300px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.5;
    }
  }
`;
const ImageDetail = styled.img`
  content: url("${({ bgUrl }) => bgUrl}");
  height: 100%;
  width: 550px;
  object-fit: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const DetailHeader = styled.div`
  display: flex;
  align-content: center;
  margin-bottom: 5px;
  justify-content: space-between;
  padding-right: 25px;
`;

const Thum = styled.img`
  background-image: url("${({ thumUrl }) => thumUrl}");

  background-size: cover;
  height: 60px;
  width: 60px;
  border-radius: 70%;

  overflow: hidden;
  object-fit: cover;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  height: 50px;
  font-size: 23px;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 15px;
  margin-right: 10px;
`;

const Picture = ({ img_no, imageUrl, reg_date = false }) => {
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);
  const [UrlImg, setUrl] = useState();
  const [imgUser, setUser] = useState();
  const [Like, setLike] = useState();
  const [imgNo, setImgno] = useState();

  const onClickLike = (img_no) => {
    axios
      .get(API_BASE_URL + "/like/" + img_no, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        if (res === 200) {
          if (Like === 1) setLike(0);
          else setLike(1);
        }
      });
  };

  const DetailImg = (img_no) => {
    axios
      .get(API_BASE_URL + "/home/detail/" + img_no, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        const data1 = res.data.img_info;
        setUrl(data1.img_url);
        setUser(data1.user_id);
        setLike(res.data.like_or_unlike);
      });
  };

  const configs = {
    animate: false,
    // clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
  };
  return (
    // <Link to={`/detail/${id}`}>
    <Container
      onClick={() => {
        setOverlay(true);
        DetailImg(img_no);
        setImgno(img_no);
        console.log(imgNo);
      }}
    >
      <Overlay
        style={{ maxWidth: "800px" }}
        configs={configs}
        isOpen={isOpen}
        closeOverlay={closeOverlay}
      >
        <div>
          <DetailHeader>
            <div style={{ display: "flex" }}>
              <Thum thumUrl={`${UrlImg}`} />
              <List>
                <Item>{imgUser}</Item>
                <Item>{reg_date.slice(0, 17)}</Item>
              </List>
            </div>
            <GiBeet
              //onClick={onClickLike(imgNo)}
              color={Like ? "#F04F53" : "black"}
              size="50px"
            />
          </DetailHeader>
          <ImageDetail bgUrl={`${UrlImg}`}></ImageDetail>
        </div>
      </Overlay>
      <ImageContainer>
        <Image bgUrl={imageUrl && `${imageUrl}`}></Image>
      </ImageContainer>
    </Container>
    //  </Link>
  );
};

Picture.propTypes = {
  img_no: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  reg_date: PropTypes.string,
};

export default Picture;
