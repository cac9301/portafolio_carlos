import React from "react";
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  FormFeedback,
} from "reactstrap";

import { Formik } from "formik";
import { schema } from "./schemasvalidation/form-schema-add";
import Swal from "sweetalert2";

const FormContact = () => {
  
  const enviarCorreo = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Mensaje guarduado & enviado al correo",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const enviar_Whats_Mensaje = (values) => {
    const { name, email, textarea } = values;
    const url = `https://api.whatsapp.com/send?phone=+573017657101&text=Nombre:%20%0A${name}%0A%20correo:%20%0A${email}%0A%20Mensaje:%20%0A${textarea}%0A%20`;
    window.open(url, "Escribeme", "width=300, height=200");
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        enviar_Whats_Mensaje(values);
        // redireccionar
        resetForm({
          values: { name: "", email: "", textarea: "" },
        });
      }}
      initialValues={{
        name: "carlos",
        email: "cac9301@gmail.com",
        textarea: "carlos",
      }}
    >
      {(formik) => (
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Contactame</h2>
                <Form onSubmit={formik.handleSubmit} className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Nombre Cliente"
                          name="name"
                          valid={formik.touched.name && !formik.errors.name}
                          invalid={
                            !!(formik.touched.name && formik.errors.name)
                          }
                          {...formik.getFieldProps("name")}
                        />
                        <FormFeedback valid>
                          Bien! es un buen nombre
                        </FormFeedback>
                        <FormFeedback>{formik.errors.name}</FormFeedback>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          placeholder="correo@corre.com"
                          name="email"
                          valid={formik.touched.email && !formik.errors.email}
                          invalid={
                            !!(formik.touched.email && formik.errors.email)
                          }
                          {...formik.getFieldProps("email")}
                        />
                        <FormFeedback valid>
                          Bien! eso si es un correo
                        </FormFeedback>
                        <FormFeedback>{formik.errors.email}</FormFeedback>
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    type="textarea"
                    rows="4"
                    placeholder="hola carlos me gustaria contactarte para el desarrollo de mi Tienda Virtaul"
                    name="textarea"
                    valid={formik.touched.textarea && !formik.errors.textarea}
                    invalid={
                      !!(formik.touched.textarea && formik.errors.textarea)
                    }
                    {...formik.getFieldProps("textarea")}
                  />
                  <FormFeedback valid>buena inquetud</FormFeedback>
                  <FormFeedback>{formik.errors.textarea}</FormFeedback>
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button
                        onClick={() => enviarCorreo()}
                        className="btn-fill d-block w-100 "
                        color="primary"
                        size="md "
                      >
                        Enviar Al Correo
                      </Button>
                    </Col>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button
                        className="btn-fill d-block w-100 "
                        color="success"
                        size="md"
                      >
                         whatsapp
                        <i
                          style={{ fontSize: "1.2rem", marginLeft: "0 rem " }}
                          className="fa fa-whatsapp"
                          aria-hidden="true"
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </Formik>
  );
};

export default FormContact;
