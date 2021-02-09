import { Container } from "react-bootstrap";
import RegistrationForm from "./RegistrationForm";

const RegisterPage = (props) => {
    return(
        <Container style={{backgroundColor: props.color}}>
            <RegistrationForm props={props}/>
        </Container>
    );
}

export default RegisterPage;