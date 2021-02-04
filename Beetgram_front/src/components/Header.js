import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { FcGlobe } from "react-icons/fc";
import { GiBeet } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";
import TagList from "./Tag";
import { tagDispatch, tagsDispatch } from "./App";

const Search = styled.div`
  object-fit: cover;
  display: grid;
  position: fixed;
  grid-template-columns: repeat(auto-fill, 20vw);
  gap: 30px;
  height: 100vh;
  width: 20vw;
  background-color: rgba(90, 243, 160, 1);
  justify-content: center;
`;

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0px 10px;
  background-color: rgba(90, 243, 160, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 15vw;
  text-align: center;
  height: 50px;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const StyledLink = styled(Link)`
  height: 50px;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 라우터로 인해 컴포넌트가 교체되면 Header에 변화를 줘야 한다.
//   탭 아래에 파란색 밑줄이 생기는 효과를 줄 것이다.
// 어떠한 라우터로 이동하는지 알아야 하기 때문에 withRouter를 사용해야 한다.

export default withRouter(({ location: { pathname } }) => {
  console.log("Header");
  const { tags } = useContext(tagsDispatch);
  const serTab = () => {
    if (pathname === "/public" || pathname === "/public/") {
      return { pathname: "/public/search" };
    } else if (pathname === "/public/search") {
      return { pathname: "/public" };
    } else if (pathname === "/home/search") {
      return { pathname: "/home" };
    } else if (pathname === "/home" || pathname === "/home/") {
      return { pathname: "/home/search" };
    }
  };

  if (pathname === "/") return null;
  else if (pathname === "/signup") return null;
  else
    return (
      <>
        <Header>
          <List>
            <Item current={pathname.includes("search")}>
              <StyledLink to={serTab}>
                <BiSearchAlt size="30px" />
              </StyledLink>
            </Item>
            <Item current={pathname.includes("public")}>
              <StyledLink to="/public">
                <FcGlobe size="30px" />
              </StyledLink>
            </Item>
            <Item current={pathname.includes("home")}>
              <StyledLink to="/home">Home</StyledLink>
            </Item>
            <Item current={pathname === "/like"}>
              <StyledLink to="/like">
                <GiBeet color="#F04F53" size="30px" />
              </StyledLink>
            </Item>
            <Item style={{ marginLeft: "10vw" }}>
              <StyledLink to="/user">
                <IoLogOutOutline size="30px" />
              </StyledLink>
            </Item>
          </List>
        </Header>
        {pathname.includes("search") && (
          <Search>
            <TagList tags={tags} />
          </Search>
        )}
      </>
    );
});
