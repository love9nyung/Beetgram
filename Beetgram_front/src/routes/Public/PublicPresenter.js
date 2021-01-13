import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Picture from "../../components/Picture";

const Container = styled.div`
  padding: 20px;
`;

// Presentor의 역할 : Container으로 부터 받은 각종 이벤트나 상태 등을 화면에 적용 시키는 역할

const PublicPresenter = ({ nowPlaying, upcoming, popular, error, loading }) => {
  return (
    <>
      <Helmet>
        <title>Movies | Bitflix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            {nowPlaying && nowPlaying.length > 0 && (
              <Section title="현재 상영작">
                {nowPlaying.map((movie) => (
                  <Picture
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                  />
                ))}
              </Section>
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default PublicPresenter;
