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
label='Nombre:'
placeholder='Ingrese su nombre' 
type="text"
onChange = {(e) => setStudent({ ...student, name: e.target.value})}
/>
<Form.Input required fluid 
icon='name' 
iconPosition='left' 
id='form_student_lastName'
label='Apellido:'
placeholder='Ingrese su apellido:' 
type="text"
onChange = {(e) => setStudent({ ...student, lastName: e.target.value})}
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_student_room'
label='Ingrese su salón:'
placeholder='Salón:' 
type="number"
onChange = {(e) => setStudent({ ...student, room: e.target.valueAsNumber})}
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_student_year'
label='Curso:'
placeholder='Ingrese su curso:' 
type="number"
onChange={(e) => setStudent({ ...student, year: e.target.valueAsNumber})}
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_student_sec'
label='Sección:'
placeholder='Ingrese su sección:' 
type="number"
onChange = {(e) => setStudent({ ...student, sec: e.target.valueAsNumber})}
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_student_turn'
label='Turno:'
placeholder='Ingrese su turno al que asiste en la escuela:' 
type="number"
onChange = {(e) => setStudent({ ...student, turn: e.target.valueAsNumber})}
/>
<Form.Input required fluid 
id='form_student_dni'
label='DNI:'
placeholder='Ingrese su DNI:'
type="number"
onChange = {(e) => setStudent({ ...student, dni: e.target.valueAsNumber})}
/>
<Form.Input required fluid 
id='form_student_nationality'
label='Nacionalidad:'
placeholder='Ingrese su nacionalidad:'
type="text"
onChange = {(e) => setStudent({ ...student, nationality: e.target.value})}
/>

<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_cuil'
label='CUIL:'
placeholder='Ingrese su cuil:'
type="number"
onChange = {(e) => setStudent({ ...student, cuil: e.target.valueAsNumber})}
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_address'
label='Domicilio:'
placeholder='Ingrese su domicilio:'
type="text"
onChange = {(e) => setStudent({ ...student, address: e.target.value})}
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_cp'
label='Ingrese su código postal:'
placeholder='Ingrese su cp:'
type="number"
onChange = {(e) => setStudent({ ...student, cp: e.target.valueAsNumber})}
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_city'
label='Ingrese la ciudad en donde vive:'
placeholder='Ingrese la ciudad donde vive:'
type="text"
onChange = {(e) => setStudent({ ...student, city: e.target.value})}
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_bar'
label='Barrio:'
placeholder='Ingrese su barrio:'
type="text"
onChange = {(e) => setStudent({ ...student, bar: e.target.value})}
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_email'
label='Ingrese su  correo electronico:'
placeholder='Ingrese su e-mail:'
type="text"
onChange = {(e) => setStudent({ ...student, email: e.target.value})}
/>
<Form.Input required fluid icon='name' iconPosition='left'
id='form_student_phone'
label='Teléfono:'
placeholder='Ingrese su teléfono:'
type="number"
onChange = {(e) => setStudent({ ...student, phone: e.target.valueAsNumber})}
/>
<Form.Input required fluid 
icon='name' iconPosition='left'
id='form_student_ill'
label='Si tiene una enfermedad crónica ingrese el costo de la misma:'
placeholder='Ingrese el costo de sus enfermedades crónicas en caso de poseerlas:'
type="number"
onChange = {(e) => setStudent({ ...student, illCost: e.target.valueAsNumber})}
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