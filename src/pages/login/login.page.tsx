import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import logo from "../../assets/logo.png";
import userStore from "../../stores/user.store";
import _ from "lodash";
import { StatusCodes } from "http-status-codes";

const loginHandler = (username: string, password: string) => {
    userStore.login(username, password);
}


const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    useEffect(() => {
        if (userStore.isLoggedIn) {
            history.push("/dashboard");
        }
    }, [userStore.isLoggedIn]);

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>
                    <Image
                        src={logo}
                    /> Ingrese a su cuenta
                </Header>

                {userStore.loginError && userStore.loginErrorCode === StatusCodes.FORBIDDEN &&
                    <Message error>
                        Usuario y/o contraseña incorrectos
                    </Message>
                }

                {userStore.loginError && userStore.loginErrorCode !== StatusCodes.FORBIDDEN &&
                    <Message error>
                        Algo salió mal, intenta nuevamente en unos minutos o contactate con soporte.
                    </Message>
                }

                <Form size='large' onSubmit={() => loginHandler(username, password)}>
                    <Segment stacked>
                        <Form.Input required fluid icon='user' iconPosition='left' placeholder='Nombre de usuario' onChange={(e, data) => setUsername(data.value)} />
                        <Form.Input
                            required
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Contraseña'
                            type='password'
                            onChange={(e, data) => setPassword(data.value)}
                        />
                        <Button fluid size='large'>
                            Ingresar
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default observer(LoginPage);