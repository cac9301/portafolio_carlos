import React from "react";
// reactstrap components
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import CardPortfolio from "./CardPortfolio";
import Stack from "./Stack";
import imgmern from "./img/mern.svg";
import Form from "./FormContact";
// core components

function ProfilePage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  return (
    <>
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/carlos-carmona.jpeg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Carlos Arturo Carmona L<br />
              </h4>
              <h6 className="description">Web developer-Js</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-justify" md="6">
              <p>
                Desarrollador de Software Fullstack junior, egresado de la
                universidad del valle como tecnologo de sistemas de informacion,
                bilingue. He venido trabajando con desarrollo web. He manejado
                semantic-ui, bootstrap, jquery, reactbootstrap, php,wordpress
                con la Universidad del Valle desarolle proyectos fullstack con
                enfasis educativos pero aplicados a la vida real. En proyectos
                personales he desarrollado en, reactjs, nodejs, bases de datos
                SQL y no SQL .En constante aprendizaje de nuevas tecnologias. No
                siendo mas agradezco el tiempo que dedicaste para leer sobre mi
                y acerca de quien soy.
              </p>
              <br />
            </Col>
            <Col className="ml-auto mr-auto text-justify" md="6">
              <p>
                Junior Fullstack Software Developer, graduated from the
                Universidad del Valle as an information systems technologist,
                bilingual. I have been working with web development. I have
                managed semantic-ui, bootstrap, jquery, reactbootstrap, php,
                wordpress with Universidad del Valle, I developed fullstack
                projects with educational emphases but applied to real life. In
                personal projects I have developed in, reactjs, nodejs, SQL and
                non SQL databases. In constant learning of new technologies.
                Being no more, I appreciate the time you spent reading about me
                and about who I am,
              </p>
              <br />
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="ml-auto mr-auto text-center mb-2" md="4">
              <h2>Diseño Web</h2>
              <i
                className="fa fa-desktop"
                style={{ fontSize: "3rem" }}
                aria-hidden="true"
              ></i>
              <p>Diseño Web Creativo Moderno. Sitios Web Rapidos y Seguros!</p>
              <ListGroup>
                <ListGroupItem>
                  Responsive Design - Optimizada para dispositivos móviles
                </ListGroupItem>
                <ListGroupItem>Diseño Personalizado</ListGroupItem>
                <ListGroupItem>Diseño escalable</ListGroupItem>
              </ListGroup>
            </Col>
            <Col className="ml-auto mr-auto text-center mb-4" md="4">
              <h2>Progra Web</h2>
              <i
                className="fa fa-code"
                style={{ fontSize: "3rem" }}
                aria-hidden="true"
              ></i>
              <p>
                Gracias a esta gran herramienta con la programación Web podremos
                crear sitios dinámicos como periódicos digitales o tiendas
                virtuales, entre otras.
              </p>
              <ListGroup>
                <ListGroupItem>Formulario de contacto</ListGroupItem>
                <ListGroupItem>Banner de Imágenes</ListGroupItem>
                <ListGroupItem>Certificado de seguridad SSL</ListGroupItem>
              </ListGroup>
            </Col>
            <Col className="ml-auto mr-auto text-center mb-4" md="4">
              <h2>E-Commerce</h2>
              <i
                style={{ fontSize: "3rem" }}
                className="fa fa-shopping-cart"
                aria-hidden="true"
              ></i>
              <p>
              La barrera de comprar online ya se rompió y Tú lo sabes. Vendes Online o Mueres Offline. Tu E-commerce profesional, Personaliza, Automatiza y optimiza.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center mb-5" md="12">
              <h2 className="text-center text-uppercase">Mi Portafolio</h2>
            </Col>
            <CardPortfolio />
          </Row>
        </Container>
        {/**stack de desarrollo */}
        <Row>
          <Col className="ml-auto mr-auto text-center mb-5" md="12">
            <h2 className="text-center text-uppercase">stcak de desarrollo</h2>
          </Col>
          <Container className="mb-5">
            <Row>
              <Col className="ml-auto mr-auto  " md="6">
                <h2 className="text-left">¿Qué es el Stack MERN?</h2>
                <p>
                  Un Stack es el conjunto de las{" "}
                  <span>diferentes tecnologías</span> que se utilizan para
                  desarrollar un software.
                  <br />
                  <br />
                  MERN Stack es una{" "}
                  <span>
                    combinación de tecnologías que permite desarrollar
                    aplicaciones de altísima calidad y de manera muy eficiente.
                  </span>
                  Además, todas son de código abierto, poseen una amplia
                  comunidad y están basadas en el lenguaje JavaScript.
                </p>
              </Col>
              <Col className="ml-auto mr-auto text-center " md="6">
                <img src={imgmern} alt=""/>
              </Col>
            </Row>
          </Container>
          <div
            className="page-header1 section-dark"
            style={{
              backgroundImage:
                "url(" + require("views/examples/img/mern.jpg") + ")",
            }}
          >
            <div className="filter" />
            <div className="content-center">
              <Container>
                <Row className="align-items-center">
                  <Col className="ml-auto mr-auto text-center " md="6">
                    <h1
                      style={{
                        fontWeight: "bold",
                        color: "#ffff",
                      }}
                      className="text-uppercase"
                    >
                      Tecnologías utilizadas en MERN
                    </h1>
                  </Col>
                  <Col className="ml-auto mr-auto text-justify" md="6">
                    <Stack />
                  </Col>
                </Row>
              </Container>
            </div>
            <div
              className="moving-clouds"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/clouds.png") + ")",
              }}
            />
          </div>
        </Row>
            <Form/>
      </div>
    </>
  );
}

export default ProfilePage;
