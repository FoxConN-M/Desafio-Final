import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import styled from 'styled-components';
import searchIcon from '../assets/searchIcon.png';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
`;

const HeaderContainer = styled.header`
    font-family: 'Work Sans', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(10, 10, 10, 0.1);
    height: 62px;
    backdrop-filter: blur(9px);
    -webkit-backdrop-filter: blur(9px);
    font-size: 14px;
`;

const HeaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 62px;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  z-index: 0;
`;

const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const LogoContainer = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

const SeriesOption = styled.span`
  display: inline-block;
  cursor: pointer;
  width: 113px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: white;
  transition: transform 0.5s;

  &:hover {
    background-color: #747474;
    transform: translateY(0%);
    box-shadow: 0px 3px 6px #0000005C;
    border-radius: 18px;
    opacity: 1;
  }
`;

const MoviesOption = styled.span`
  display: inline-block;
  cursor: pointer;
  width: 113px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: white;
  transition: transform 0.5s;

  &:hover {
    background-color: #747474;
    transform: translateY(0%);
    box-shadow: 0px 3px 6px #0000005C;
    border-radius: 18px;
    opacity: 1;
  }
`;

const SearchIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  margin-top: 10px;
`;

const SecondaryMenuContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 32px;
  gap: 31px;
`;

const FiltersOption = styled.span`
  display: inline-block;
  cursor: pointer;
  margin-right: 10px;
  color: white;

  &:hover {
    color: gray;
  }
`;

const LoginOption = styled.span`
  display: inline-block;
  cursor: pointer;
  color: white;

  &:hover {
    color: gray;
  }
`;

function Header() {
  return (
    <header>
      <HeaderContainer>
        <LogoContainer>
          <Logo alt="Logo dell filmes" />
        </LogoContainer>
        <MenuContainer>
          <SeriesOption>Séries</SeriesOption>
          <MoviesOption>Filmes</MoviesOption>
        </MenuContainer>
        <SecondaryMenuContainer>
            <SearchIcon src={searchIcon} alt="Ícone de pesquisa" />
            <FiltersOption>Filtros</FiltersOption>
            <LoginOption>Login</LoginOption>
        </SecondaryMenuContainer>
      </HeaderContainer>
      <HeaderOverlay />
    </header>
  );
}

export default Header;