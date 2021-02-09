import { useState } from "react";
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import "./RegistrationForm.css";

import FlashMessage from "react-flash-message";

const RegistrationForm = (props) => {
  const newUser = props.props.newUser;
  const setNewUser = props.props.setNewUser;

  const [firstNameError, setFirstNameError] = useState(true);
  const [lastNameError, setLastNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [mobileError, setMobileError] = useState(true);
  const [linkedInError, setLinkedInError] = useState(true);

  const [tac, setTac] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const clear = () => {
    setNewUser({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      linkedInProfile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !mobileError &&
      !linkedInError &&
      tac
    ) {
      setShowMessage(true);
      await props.props.handleSubmit();
      clear();
      props.history.push("/success");
    }
  };

  return (
    <>
      <Row className="justify-content-center" id="register">
        <Col md={6} xs={12} className="form-section">
          <h2>Register</h2>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={newUser.first_name}
                  onChange={(e) =>
                    setNewUser(
                      { ...newUser, first_name: e.target.value },
                        e.target.value !== ""
                          ? setFirstNameError(false)
                          : setFirstNameError(true)
                    )
                  }
                />
                {!firstNameError && (
                  <Form.Text className="text-muted">Looks good!</Form.Text>
                )}
                {firstNameError && submit && (
                  <Form.Text className="text-muted" type="invalid">
                    Enter a valid first name
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value={newUser.last_name}
                  onChange={(e) => 
                    setNewUser({ ...newUser, last_name: e.target.value },
                    e.target.value !== ""
                      ? setLastNameError(false)
                      : setLastNameError(true)
                  )}
                />
                {!lastNameError && (
                  <Form.Text className="text-muted">Looks good!</Form.Text>
                )}
                {lastNameError && submit && (
                  <Form.Text className="text-muted" type="invalid">
                    Enter a valid last name
                  </Form.Text>
                )}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <Form.Control
                    style={{ width: "100%" }}
                    required
                    type="email"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    value={newUser.email}
                    onChange={(e) => 
                      setNewUser({ ...newUser, email: e.target.value },
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                        e.target.value
                      )
                        ? setEmailError(false)
                        : setEmailError(true)
                    )}
                  />
                  {!emailError && (
                    <Form.Text className="text-muted">Looks good!</Form.Text>
                  )}
                  {emailError && submit && (
                    <Form.Text className="text-muted" type="invalid">
                      Enter a valid email
                    </Form.Text>
                  )}
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  value={newUser.phone}
                  onChange={(e) => 
                    setNewUser({ ...newUser, phone: e.target.value },
                    /^(\+91[\s]?)?[0]?(91)?[789]\d{9}$/.test(e.target.value)
                      ? setMobileError(false)
                      : setMobileError(true)
                  )}
                  required
                />
                {!mobileError && (
                  <Form.Text className="text-muted">Looks good!</Form.Text>
                )}
                {mobileError && submit && (
                  <Form.Text className="text-muted" type="invalid">
                    Enter a valid phone number
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>LinkedIn Profile</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="LinkedIn Profile"
                  required
                  onChange={(e) => 
                    setNewUser({ ...newUser, linkedInProfile: e.target.value },
                    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi.test(
                      e.target.value
                    )
                      ? setLinkedInError(false)
                      : setLinkedInError(true)
                  )}
                />
                {!linkedInError && (
                  <Form.Text className="text-muted">Looks good!</Form.Text>
                )}
                {linkedInError && submit && (
                  <Form.Text className="text-muted" type="invalid">
                    Enter a valid link
                  </Form.Text>
                )}
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                checked={tac}
                onChange={() => setTac(!tac)}
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
      {showMessage && (
        <FlashMessage duration={5000} persistOnHover={true}>
          <p>Saving your details ...</p>
        </FlashMessage>
      )}
    </>
  );
};

export default withRouter(RegistrationForm);
