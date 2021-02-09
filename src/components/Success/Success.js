import { Row, Col, Card, Table, Button } from "react-bootstrap";

import { Link, withRouter } from "react-router-dom";

import "./Success.css";

const Success = ({ user, setUser }) => {
  const clear = () =>{
    setUser({
      STATUS: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      linkedInProfile: "",
      picture: "",
    })
  }
  return (
    <Row className="justify-content-center" id="preview">
      <Col md={4} xs={12} className="preview-section">
        <h2>
          Welcome {user.first_name} {user.last_name}!
        </h2>
        <h5 style={{backgroundColor: "green"}}>Your details have been successfully {user.STATUS}</h5>
        <Card className="preview-card">
          <Card.Img
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain",
            }}
            variant="top"
            src={user.picture}
          />
          <Table responsive="xl">
            <tbody>
              <tr>
                <td>First Name</td>
                <td className="values">{user.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td className="values">{user.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className="values email">
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td className="values">{user.phone}</td>
              </tr>
              <tr>
                <td>LinkedIn Profile</td>
                <td className="values linkedin">
                  <a href={user.linkedInProfile}>
                    {user.linkedInProfile}
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>

          <Card.Footer>
            <Card.Link onClick={()=> clear()} as={Link} to="/forest/register">
              <Button variant="success">Close</Button>
            </Card.Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default withRouter(Success);
