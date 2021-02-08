import {useEffect} from 'react';
import { Container } from "react-bootstrap";
import RegistrationForm from "./RegistrationForm";

const RegisterPage = (props) => {
    useEffect(()=>{
        console.log(props.color);
    })
    return(
        <Container style={{backgroundColor: props.color}}>
            <RegistrationForm props={props}/>
        </Container>
    );
}

export default RegisterPage;