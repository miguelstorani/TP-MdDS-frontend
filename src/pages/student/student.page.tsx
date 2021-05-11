import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button, Form, FormField, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo from "../../assets/logo.png";

import { StatusCodes } from "http-status-codes";
import { format } from "path";
import { emptyStudent, Student } from "../../models/student";

const sendForm = (student: Student): void{
//todo cargar en la base de datos

}

const LoadStudentPage = () => {

    const [student, setStudent] = useState(emptyStudent);


    return (
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>
                    <Image
                        src={logo}
                    /> Ingrese sus datos
                </Header>

<Form size='large' onSubmit={() => sendForm(student)}>
<Segment stacked>
<Form.Input required fluid icon='name' iconPosition='left' placeholder='Ingrese su nombre' onChange={(e, data) => setName(data.value)} />
<Form.Input required fluid icon='name' iconPosition='left' placeholder='Ingrese su apellido:' type={Text} onChange={(e, data) => setLastName(data.value)} />
<Form.Input required fluid icon='name' iconPosition='left' placeholder='Ingrese su salón:' onChange={(e, data) => setRoom(data.value)} />
<Form.Input required fluid icon='name' iconPosition='left' placeholder='Ingrese su curso:' onChange={(e, data) => setYear(data.value)} />
<Form.Input required fluid icon='name' iconPosition='left' placeholder='Ingrese su sección:' onChange={(e, data) => setSec(data.value)} />
<Form.Input required fluid icon='name' iconPosition='left' placeholder='Ingrese su turno:' onChange={(e, data) => setTurn(data.value)} />




</Segment>
</Form>
</Grid.Column>
        </Grid>

    )
}

export default observer(LoadStudentPage);