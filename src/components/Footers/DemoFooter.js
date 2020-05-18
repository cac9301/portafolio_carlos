
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=+573017657101"
                  target="_blank"
                >
                 <i style={{fontSize: "1rem"}}className="fa fa-whatsapp" aria-hidden="true"></i> Whtasapp
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                >
                  <i style={{fontSize: "1rem"}} className="fa fa-envelope-o" aria-hidden="true"></i>    correo:cac9301@gmail.com
              
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
