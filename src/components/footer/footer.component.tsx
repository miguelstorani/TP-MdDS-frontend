import React from "react";
import { Container, Divider, Segment, Image } from "semantic-ui-react";
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <Segment vertical style={{ margin: '2em 0em 0em', padding: '1em 0em' }}>
            <Container textAlign='center'>
                <Divider section />
                Bruno Rodriguez, Sol Tomatis, Miguel Storani
            </Container>
        </Segment>
    );
};

export default Footer;