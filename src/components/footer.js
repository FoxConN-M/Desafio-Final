import React, { Component } from "react";
import styled from "styled-components";
import zelda from './../assets/Zelda 01.png'
import moon from './../assets/moonlight.png'
import duna from './../assets/Duna.png'
import bat from './../assets/batman.png'
import hari from './../assets/harriet.png'
import star from './../assets/Star.png'
import Boh from './../assets/Bohemia.png'
import wak from './../assets/Wakanda.png'
import Jura from './../assets/jurassic.png'
import Ray from './../assets/Raya.png'
import us from './../assets/us.png'
import nao from './../assets/nao olhe.png'
import mario from './../assets/Mario bross.png'
import starfox from './../assets/starfox.png'
import tenet from './../assets/tenet.png'
import pag from '../assets/paginas.png'


const Containerfilmes2= styled.figcaption`
  font-size: 12px;
`
const Containerfilmes3= styled.figcaption`
  font-size: 12px;
`

const CaixaPrincipal2 = styled.footer`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  gap: 18px;
  color: white;
  img {
    width: 200px;
    height: 300px;
  }
`;const CaixaPrincipal3 = styled.footer`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  gap: 18px;
  color: white;
  img {
    width: 200px;
    height: 300px;
  }
`;

const Paginas = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 55px;
  img {
  width: 250px;
  height: auto;
  }
  `

export default class Footer extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "A lenda de Zelda",
        image: zelda,
        caption1: "A lenda de Zelda",
        caption2: "2024",
      },
      {
        id: 2,
        name: "Moonlight",
        image: moon,
        caption1: "Moonlight",
        caption2: "2022",
      },
      {
        id: 3,
        name: "Super Mario Bros",
        image: mario,
        caption1: "Super Mario Bros",
        caption2: "2023",

      },
      {
        id: 4,
        name: "Duna",
        image: duna,
        caption1: "Duna",
        caption2: "2021",
      },
      {
        id: 5,
        name: "Homem Morcego",
        image: bat,
        caption1: "Homem Morcego",
        caption2: "2022",
      },
      {
        id: 6,
        name: "Harriet",
        image: hari,
        caption1: "Harriet",
        caption2: "2019",
      },
      {
        id: 7,
        name: "Star Wars",
        image: star,
        caption1: "Star Wars",
        caption2: "2016",
      },
      {
        id: 8,
        name: "Bohemian Rhapsody",
        image: Boh,
        caption1: "Bohemian Rhapsody",
        caption2: "2020",
      },
      {
        id: 9,
        name: "Pantera Negra: Wak..",
        image: wak,
        caption1: "Pantera Negra: Wak..",
        caption2: "2022",
      },
      {
        id: 10,
        name: "Jurassic Park",
        image: Jura,
        caption1: "Jurassic Park",
        caption2: "2019",
      },
      {
        id: 11,
        name: "Starfox",
        image: starfox,
        caption1: "Starfox",
        caption2: "2022",
      },
      {
        id: 12,
        name: "Raya e o Último Dragão",
        image: Ray,
        caption1: "Raya e o Último Dragão",
        caption2: "2016",
      },
      {
        id: 13,
        name: "Nós",
        image: us,
        caption1: "Nós",
        caption2: "2016",
      },
      {
        id: 14,
        name: "tenet",
        image: tenet,
        caption1: "Tenet",
        caption2: "2020",
      },
      {
        id: 15,
        name: "Não Olhe para Cima",
        image: nao,
        caption1: "Não Olhe para Cima",
        caption2: "2021",
      }
    ]
  };

  render() {
    const { products } = this.state;
    const fileiradois = products.slice(5, 10);
    const Fileiratres = products.slice(10, 15);
    return (
      <>
        <CaixaPrincipal2>
          {fileiradois.map((item) => (
            <Containerfilmes3 key={item.id}>
              <img src={item.image} alt={item.name} />
              <figcaption>{item.caption1}</figcaption>
              <figcaption>{item.caption2}</figcaption>
            </Containerfilmes3>
          ))}
        </CaixaPrincipal2>

        <CaixaPrincipal3>
          {Fileiratres.map((item) => (
            <Containerfilmes2 key={item.id}>
              <img src={item.image} alt={item.name} />
              <figcaption>{item.caption1}</figcaption>
              <figcaption>{item.caption2}</figcaption>
            </Containerfilmes2>
          ))}
        </CaixaPrincipal3>
         <Paginas>
            <img src={pag} alt="Paginas" />
         </Paginas>
      </>
    );
  }
}