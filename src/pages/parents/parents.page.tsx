import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button, Checkbox, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import logo from "../../assets/logo.png";
import userStore from "../../stores/user.store";
import _, { size, values } from "lodash";
import { StatusCodes } from "http-status-codes";
import { emptyParent, Parents } from "../../models/parents";
import { Relationship } from "../../models/relationship";
import { emptySchool } from "../../models/school";

const sendForm = (parent: Parents) => {
//todo  hacer algo para enviar ese familiar

}
/*
const state = {}
 const handleChange = (e: Relationship, { value }) => this.setState({ value });
*/
    
const ParentPage = () => {

  const [value, setValue] = useState<Relationship>(Relationship.Brother);
const [parent, setParent] = useState(emptyParent);  
const [school, setSchool] = useState(emptySchool);
const [cheked, setCheked] = useState(false);

const update = () =>{
  setParent({...parent, relation: value})
  setParent({ ...parent, live: cheked})
  setParent({ ...parent, school: school})
} 

    return (
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center'>
                    <Image
                        src={logo}
                    /> Ingrese sus datos  
                </Header>

<Form size='large' onSubmit={() => sendForm(emptyParent)}>
<Segment>
<Form.Input 
required fluid icon='name' 
iconPosition='left' 
id='form_parent_name'
label='Nombre:'
placeholder='Ingrese su nombre' 
onChange = {e => setParent({ ...parent, name: e.target.value })}
type="text"
/>
<Form.Input required fluid 
icon='name' 
iconPosition='left' 
id='form_parent_lastName'
label='Apellido:'
placeholder='Ingrese su apellido:' 
onChange = {e => setParent({ ...parent, lastName: e.target.value })}
type="text"
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_parent_age'
label='Edad:'
placeholder='Ingrese su edad:' 
type="number"
onChange = {(e) => setParent({ ...parent, age: e.target.valueAsNumber })}

/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_parent_ocupation'
label='¿¿Cuál es su ocupación?:'
placeholder='Ingrese su ocupación:' 
type="text"
onChange = {(e) => setParent({ ...parent, occupation: e.target.value})}
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_parent_workPlace'
label='¿Dónde trabaja?:'
placeholder='Ingrese su lugar de trabajo (profesión, administrativo, etc):' 
type="text"
onChange = {(e) => setParent({ ...parent, workPlace: e.target.value})}
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_parent_money'
label='Ingresos mensuales:'
placeholder='Ingrese el valor, en números, de  sus ingresos:' 
type="number"
onChange = {(e) => setParent({ ...parent, money: e.target.valueAsNumber})}
/>
<Form.Input required fluid icon='name' 
iconPosition='left'
id='form_parent_ill'
label='Costos por enfermedad:'
placeholder='Ingrese los costos de sus enfermedades crónicas:'
type="number"
onChange={(e) => setParent({ ...parent, illCost: e.target.valueAsNumber})}
/>
  
<Form.Field>
<Checkbox 
id='form_parent_live'
label='Convivo con el estudiante solicitante'
checked = {cheked}
onClick = {(e) => setCheked(cheked)}
/>

</Form.Field>

<div>
<Form.Group inline>
<label>Relación con familiares</label>
          <Form.Radio
            label='Madre'
            value={Relationship.Mother}
            checked={value === Relationship.Mother}
onClick =  {(e) => setValue(value)}
          />
          <Form.Radio
            label='Padre'
            value={Relationship.Phater}
            checked={value === Relationship.Phater}            
onClick = {(e) => setValue(value)}            
          />
            
        <Form.Radio 
label='Hermano'
value={Relationship.Brother}   
checked={value === Relationship.Brother}
        onClick = {(e) => setValue(value)}
        />
        
</Form.Group>
</div>

<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_parent_school'
label='Ingrese el CUE:'
placeholder='El Código único Escolar del alumno solicitante:' 
type="number"
onChange = {(e) => setSchool({ ...school, cue: e.target.valueAsNumber})}
/>

<Button fluid   size='large'   type='submit' label='Cargar los datos'> Submit</Button>
</Segment>
</Form>
        
                </Grid.Column>
        </Grid>

    )

} 

export default observer(ParentPage);