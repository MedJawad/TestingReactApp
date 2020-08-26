import React from "react";
import {
  HeaderContainer,
  HeaderBrand,
  HeaderLinks,
  HeaderLink,
} from "./Header.styles";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBrand>MYREACTAPP</HeaderBrand>
      <HeaderLinks>
        <HeaderLink>
          <Link to="/">Home</Link>
        </HeaderLink>
        <HeaderLink>
          <Link to="/posts">Posts</Link>
        </HeaderLink>
        <HeaderLink>
          <Link to="/users">Users</Link>
        </HeaderLink>
        <HeaderLink>
          <Link to="/logout">Logout</Link>
        </HeaderLink>
      </HeaderLinks>
    </HeaderContainer>
  );
};

export default Header;
