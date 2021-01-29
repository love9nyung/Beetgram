import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Overlay from "react-overlay-component";
import { GiBeet } from "react-icons/gi";
import { DetailApi, likeApi } from "../api";
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
  background-image: url("${({ bgUrl }) => bgUrl}");

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
  const [urlImg, setUrl] = useState();
  const [imgUser, setUser] = useState();
  const [like, setLike] = useState();
  const [thumbUrl, setThumb] = useState();

  //useCallback 사용
  const onClickLike = (event) => {
    if (like === 1) setLike(0);
    else setLike(1);

    const dataImgNo = event.target.parentNode.getAttribute("data-img-no");
    console.log(dataImgNo);
    if (dataImgNo) likeApi(dataImgNo, like, setLike);
  };

  const DetailImg = (img_no) => {
    DetailApi(img_no, setUrl, setUser, setLike, setThumb);
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
              <Thum bgUrl={`${thumbUrl}`} />
              <List>
                <Item>{imgUser}</Item>
                <Item>{reg_date.slice(0, 17)}</Item>
              </List>
            </div>
            <GiBeet
              onClick={onClickLike}
              color={like ? "#F04F53" : "black"}
              size="50px"
              data-img-no={img_no}
            />
          </DetailHeader>
          <ImageDetail bgUrl={`${urlImg}`}></ImageDetail>
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
