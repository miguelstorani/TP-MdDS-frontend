import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button, Form, FormField, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import logo from "../../assets/logo.png";

import { StatusCodes } from "http-status-codes";
import { format } from "path";
import { emptyStudent, Student } from "../../models/student";
import studentStore from "../../stores/student.store";

const sendForm = (student: Student) => {
//todo cargar en la base de datos
studentStore.loadStudent(student);
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

<Form size='large'>
<Segment stacked>

<Form.Input 
required fluid icon='name' 
iconPosition='left' 
id='form_student_name'
label='Ingrese su nombre:'
placeholder='Ingrese su nombre' 
type="text"
/>
<Form.Input required fluid 
icon='name' 
iconPosition='left' 
id='form_student_lastName'
label='Ingrese su apellido:'
placeholder='Ingrese su apellido:' 
type="text"
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_student_room'
label='Ingrese su salón:'
placeholder='Ingrese su salón:' 
type="number"
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_student_year'
label='Ingrese su curso:'
placeholder='Ingrese su curso:' 
type="number"
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_student_sec'
label='Ingrese su sección:'
placeholder='Ingrese su sección:' 
type="number"
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_student_turn'
label='Ingrese su Turno:'
placeholder='Ingrese su turno:' 
type="number"
/>
<Form.Input required fluid 
id='form_student_dni'
label='Ingrese su DNI:'
placeholder='Ingrese su dni:'
type="number"
/>
<Form.Input required fluid 
id='form_student_nationality'
label='Ingrese su nacionalidad:'
placeholder='Ingrese su nacionalidad:'
type="text"
/>

<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_cuil'
label='Ingrese su CUIL:'
placeholder='Ingrese su cuil:'
type="number"
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_address'
label='Ingrese su domicilio:'
placeholder='Ingrese su domicilio:'
type="text"
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_cp'
label='Ingrese su código postal:'
placeholder='Ingrese su cp:'
type="number"
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_city'
label='Ingrese la ciudad en donde vive:'
placeholder='Ingrese la ciudad donde vive:'
type="text"
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_bar'
label='Ingrese su barrio:'
placeholder='Ingrese su barrio:'
type="text"
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_email'
label='Ingrese su  correo electronico:'
placeholder='Ingrese su e-mail:'
type="text"
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_phone'
label='Ingrese su teléfono:'
placeholder='Ingrese su teléfono:'
type="number"
/>
<Form.Input required fluid 
icon='name' iconPosition='left'
id='form_student_ill'
label='Si tiene una enfermedad crónica ingrese el costo de la misma:'
placeholder='Ingrese el costo de sus enfermedades crónicas en caso de poseerlas:'
type="number"
/>
<Button fluid label='Cargar los datos' size='large' >
Ingresar los datos
</Button>
</Segment>
</Form>
</Grid.Column>
        </Grid>

    )
}

export default observer(LoadStudentPage);