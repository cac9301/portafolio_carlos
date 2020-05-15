import React from "react";
import { Row, Col } from "reactstrap";
import styled from "@emotion/styled";
import imgm from "./img/mern-01.svg";
import imge from "./img/mern-02.svg";
import imgr from "./img/mern-03.svg";
import imgn from "./img/mern-04.svg";

const Paragraf = styled.p`
  color: #ffff;
`;
const Img = styled.img`
  max-width: 80px;
  height: auto;
`;
const H3 = styled.h3`
  color: #ffff;
  font-weight: bold;
  font-size: 2rem;
  text-align: "center";
`;

const Stack = () => {
  return (
    <>
      <Row className="align-tiems-center">
        <Col className="mt-3 " md="6">
          <Img src={imgm} alt="" />
          <H3>Mongo</H3>
          <Paragraf>
            Una de las bases de datos no relacionales más famosas que existen en
            la actualidad. Son muy dinámicas y rápidas, con la posibilidad de
            correr en equipos de bajos recursos.
          </Paragraf>
        </Col>
        <Col className="text-left mt-3" md="6">
          <Img src={imge} alt="" />
          <H3>Express</H3>
          <Paragraf>
            Permite la configuración del servidor web en NodeJS, manejando todo
            el enrutamiento de la aplicación de manera sencilla y eficiente.
          </Paragraf>
        </Col>
      </Row>
      <Row>
        <Col className="text-left mt-3" md="6">
          <Img src={imgn} alt="" />
          <H3>Node</H3>
          <Paragraf>
            Permite programar nuestro servidor con una gran variedad de paquetes
            que facilitan el flujo de trabajo, ayudando a la escalabilidad de
            nuestras aplicaciones.
          </Paragraf>
        </Col>
        <Col className="text-left mt-3" md="6">
          <Img src={imgr} alt="" />
          <H3>React</H3>
          <Paragraf>
            Utilizado para desarrollar el front-end de nuestras aplicaciones de
            una manera escalable, organizada y eficiente, y con una “user
            experience (ux)” más fluida y efectiva.
          </Paragraf>
        </Col>
      </Row>
    </>
  );
};

export default Stack;
