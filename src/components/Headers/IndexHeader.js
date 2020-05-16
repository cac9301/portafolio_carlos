
import React from "react";
// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/fondo.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Desarrollo Web React</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
