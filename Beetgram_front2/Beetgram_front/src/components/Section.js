import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  margin-bottom: 50px;
`;

const ContainerSearch = styled.div`
  margin-bottom: 50px;
  margin-left: 15vw;
`;

const Title = styled.span`
  margin-left: 5vw;
  font-size: 25px;
  font-weight: 600px;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 30px;
  justify-content: center;
`;

const Section = ({ title, children }) => {
  const pathname = useLocation().pathname;
  if (pathname.includes("search")) {
    return (
      <ContainerSearch>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
      </ContainerSearch>
    );
  } else {
    return (
      <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
      </Container>
    );
  }
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
