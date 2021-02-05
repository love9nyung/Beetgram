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

const HomePresenter = ({ loading, data1 }) => {
  // console.log(data1.map());

  return (
    <>
      <Helmet>
        <title>Beetgram</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default HomePresenter;
