import React, { useState } from 'react';
import styled from 'styled-components';
import bannerImage from '../assets/avatarbanner.png';
import estrela from '../assets/estrelaIcone.svg'
import imdblogo from '../assets/imdblogo.png'
import playicon from '../assets/playicon.png'
import movieicon from '../assets/movieicon.png'
import searchIcon from '../assets/iconelupadois.png';
import imagem1 from '../assets/zelda.png'
import imagem2 from '../assets/moonlight.png'
import imagem3 from '../assets/supermario.png'
import imagem4 from '../assets/dune.png'
import imagem5 from '../assets/batman.png'
import imagem6 from '../assets/arriet.png'
import imagem7 from '../assets/starwars.png'
import imagem8 from '../assets/bohemian.png'
import imagem9 from '../assets/wakandaforever.png'
import imagem10 from '../assets/jurassicworld.png'
import setaesquerda from '../assets/setaesquerda.png';
import setadireita from '../assets/setadireita.png';

const Wrapper = styled.div`
  background-color: #000000;
`;

const BannerContainer = styled.div`
  position: relative;
  height: 576px;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 70%);
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextSection = styled.section`
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  top: 400px;
  left: 101px;
  transform: translateY(-50%);
  width: 512px;
  height: 178px;
  color: white;
`;

const BannerTitle = styled.h2`
  font-weight: 700;
  margin: 0px;
`;

const DescriptionBanner = styled.p`
  font-size: 10px;
  margin: 0px;
`;

const BannerRate = styled.div`
  width: 134px;
  height: 28px;
  margin-top: 5px;
  display: flex;
`
const EstrelaImage = styled.img`
  width: 24px;
  height: 23px;
`
const NotaMaior = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 21px;
  margin-top: 0px;
  margin-left: 9px;
  margin-bottom: 0px;
`
const NotaMenor = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  margin-top: 10px;
  margin-left: 3px;
  margin-bottom: 0px;
  color: #F6F6F6;
`

const LogoNota = styled.img`
  margin-left: 14px;
  margin-top: 4px;
  width: 41px;
  height: 19px;
`
const Textbox = styled.div`
  width: 512px;
  height: 88px;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  margin-top: 0px;
`
const ButtonContainer = styled.div`
  position: absolute;
  top: 517px;
  left: 101px;
  transform: translateY(-50%);
  width: 512px;
  display: flex;
  gap: 16px;
`;

const Butonlaranja = styled.button`
  width: 176px;
  height: 39px;
  background-color: #ffffff;
  border: none;
  border-radius: 25px;
  font-family: 'Open Sans', sans-serif;
  background-color: #D53A00;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #b93200;
  }
`;

const Butoncinza = styled.button`
  width: 176px;
  height: 39px;
  background-color: #717171;
  border: none;
  border-radius: 25px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  justify-content: center;

  &:hover {
    background-color: #616161;
  }
`;

const PlayIcon = styled.img`
  width: 11px;
  height: 14px;
  margin-right: 7px;
`
const MovieIcon = styled.img`
  width: 18px;
  height: 14px;
  margin-right: 7px;
`
const NavContainer = styled.nav`
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinks = styled.ul`
  font-family: 'Open Sans', sans-serif;
  display: flex;
  gap: 58px;
  list-style-type: none;
  justify-content: center;
  color: white;
  padding-left: 0px;
`;

const NavLink = styled.li`
`;

const NavLogo = styled.img`
  width: 19px;
  height: 19px;
  padding-left: 58px;
`;

const UltimosLançamentos = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin-left: 101px;
  margin-top: 63px;
`

const ImageGallery = styled.div`
  height: 258px;
  width: 100%;
  display: flex;
  gap: 18px;
  margin-top: 21px;
  overflow: hidden;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Caption = styled.p`
  position: absolute;
  top: 970px;
  margin-right: 45px;
  text-align: center;
  color: blac;
  z-index: 3;
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ArrowIcon = styled.img`
  width: 18px;
  height: 29px;
`;

const EmAlta = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: white;
    margin-left: 101px;
    margin-top: 70px;
`

function Main() {
    const images = [
      { src: imagem1, alt: 'Imagem 1', caption: 'A Lenda de Zelda' },
      { src: imagem2, alt: 'Imagem 2', caption: 'Moonlight' },
      { src: imagem3, alt: 'Imagem 3', caption: 'Legenda da Imagem 3' },
      { src: imagem4, alt: 'Imagem 4', caption: 'Legenda da Imagem 4' },
      { src: imagem5, alt: 'Imagem 5', caption: 'Legenda da Imagem 5' },
      { src: imagem6, alt: 'Imagem 6', caption: 'Legenda da Imagem 6' },
      { src: imagem7, alt: 'Imagem 7', caption: 'Legenda da Imagem 7' },
      { src: imagem8, alt: 'Imagem 8', caption: 'Legenda da Imagem 8' },
      { src: imagem9, alt: 'Imagem 9', caption: 'Legenda da Imagem 9' },
      { src: imagem10, alt: 'Imagem 10', caption: 'Legenda da Imagem 10' },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        if (newIndex < 0) {
          return images.length - 5;
        }
        return newIndex;
      });
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex > images.length - 5) {
          return 0;
        }
        return newIndex;
      });
    };

  return (
    <Wrapper>
      <BannerContainer>
        <BannerImage src={bannerImage} alt="Banner" />
        <TextSection>
          <BannerTitle>Avatar: o Caminho da Água</BannerTitle>
          <DescriptionBanner>3hr 23 min | Fantasia, Família | 2023</DescriptionBanner>
          <BannerRate>
            <EstrelaImage src={estrela} alt="Estrela" />
            <NotaMaior>9,9</NotaMaior>
            <NotaMenor>/10</NotaMenor>
            <LogoNota src={imdblogo} alt="IMDB Logo" />
          </BannerRate>
          <Textbox>
                <p>
                Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.
                </p>
            </Textbox>
        </TextSection>
        <ButtonContainer>
          <Butonlaranja>
            <PlayIcon src={playicon} alt="Play Icon" />
            Assistir agora</Butonlaranja>
          <Butoncinza>
            <MovieIcon src={movieicon} alt= "Movie Icon" />
            Trailer</Butoncinza>
        </ButtonContainer>
      </BannerContainer>
      <NavContainer>
        <NavLinks>
          <NavLink>Popular</NavLink>
          <NavLink>Drama</NavLink>
          <NavLink>Ação</NavLink>
          <NavLink>Aventura</NavLink>
          <NavLink>Comédia</NavLink>
          <NavLink>Crime</NavLink>
          <NavLink>Fantasia</NavLink>
          <NavLink>Família</NavLink>
        </NavLinks>
        <NavLogo src={searchIcon} alt="Icon Search" />
      </NavContainer>
      <UltimosLançamentos>
      Últimos lançamentos  
      </UltimosLançamentos>
      <ImageGallery>
      <ArrowContainer>
        <ArrowButton onClick={handlePrevClick}>
          <ArrowIcon src={setaesquerda} alt="Seta esquerda" />
        </ArrowButton>
      </ArrowContainer>
      {images.slice(currentIndex, currentIndex + 5).map((image) => (
        <ImageContainer key={image.src}>
          <Image src={image.src} alt={image.alt} />
          <Caption>{image.caption}</Caption>
        </ImageContainer>
      ))}
      <ArrowContainer>
        <ArrowButton onClick={handleNextClick}>
          <ArrowIcon src={setadireita} alt="Seta direita" />
        </ArrowButton>
      </ArrowContainer>
    </ImageGallery>
      <EmAlta>
        Em alta
      </EmAlta>
    </Wrapper>
  );
}



export default Main;