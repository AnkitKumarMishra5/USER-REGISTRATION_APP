import { Row, Col, Card, Table, Button } from "react-bootstrap";

import { Link, withRouter } from "react-router-dom";

import "./Success.css";

const Success = ({ newUser, setNewUser }) => {
  const clear = () =>{
    setNewUser({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      linkedInProfile: "",
    })
  }
  return (
    <Row className="justify-content-center" id="preview">
      <Col md={4} xs={12} className="preview-section">
        <h2>
          Welcome {newUser.first_name} {newUser.last_name}!
        </h2>
        <h5 style={{backgroundColor: "green"}}>Your details have been successfully {newUser.STATUS}</h5>
        <Card className="preview-card">
          <Card.Img
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "contain",
            }}
            variant="top"
            src={newUser.picture}
          />
          <Table responsive="xl">
            <tbody>
              <tr>
                <td>First Name</td>
                <td className="values">{newUser.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td className="values">{newUser.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td className="values email">
                  <a href={`mailto:${newUser.email}`}>{newUser.email}</a>
                </td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td className="values">{newUser.phone}</td>
              </tr>
              <tr>
                <td>LinkedIn Profile</td>
                <td className="values linkedin">
                  <a href={newUser.linkedInProfile}>
                    {newUser.linkedInProfile}
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
