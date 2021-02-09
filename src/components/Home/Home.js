import { Link, withRouter } from "react-router-dom";

import { Container, ListGroup, Row, Col } from "react-bootstrap";

import "./Home.css";

const Home = ({ colors }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} xs={12} className="links">
          <h2>Welcome!</h2>
          <ListGroup>
            {Object.keys(colors).map((color, index) => {
              return (
                <ListGroup.Item
                  key={index}
                  as={Link}
                  to={`/${color}/register`}
                  style={{
                    backgroundColor: colors[color],
                  }}
                >
                  Forest Register
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Home);
