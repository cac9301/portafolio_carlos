import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { portafolio } from "./datos";


const Example = (props) => {
    console.log(portafolio);
    
  return (
    <div className="card-columns">
      {portafolio.map(portafolio=>(
      <Card>
        <CardImg
          top
          width="100%"
          src={portafolio.id}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="text-uppercase text-center mb-4 ">{portafolio.nombre}</CardTitle>
          <CardText>
          {portafolio.desc}
          </CardText>
          <Button
          className="d-block"
          color="primary"
          href={portafolio.url}
          target="_blank"
          >Conocer Sitio</Button>
        </CardBody>
      </Card>
      ))};
    </div>
  );
};

export default Example;
