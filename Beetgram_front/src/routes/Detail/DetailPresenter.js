import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";
import Helmet from "react-helmet";
import { AiOutlineHeart } from "react-icons/ai";
const Container = styled.div`
  height: 80%;
  width: 80%;
  position: fixed;
  padding: 50px;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
  flex-direction: column;
`;

const Cover = styled.div`
  width: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const DetailPresenter = ({ result, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Ryanflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Ryanflix
        </title>
      </Helmet>
      <Content>
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <AiOutlineHeart color="red" size="30px" />
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>·</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>·</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? `${genre.name}`
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
        </Data>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  id: PropTypes.number.isRequired,
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
