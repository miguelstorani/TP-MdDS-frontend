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

const sendForm = (parent: Parents) => {
//todo  hacer algo para enviar ese familiar

}
/*
const state = {}
 const handleChange = (e: Relationship, { value }) => this.setState({ value });
*/
    
const parentPage = () => {

  const [value, setValue] = useState<Relationship>();
  
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
label='Ingrese su nombre:'
placeholder='Ingrese su nombre' 
type="text"
/>
<Form.Input required fluid 
icon='name' 
iconPosition='left' 
id='form_parent_lastName'
label='Ingrese su apellido:'
placeholder='Ingrese su apellido:' 
type="text"
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_parent_age'
label='Edad:'
placeholder='Ingrese su edad:' 
type="number"

/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_parent_ocupation'
label='¿¿Cuál es su ocupación?:'
placeholder='Ingrese su ocupación:' 
type="text"
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_parent_workPlace'
label='¿Dónde trabaja? (lugar de trabajo):'
placeholder='Ingrese su lugar de trabajo:' 
type="text"
/>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_parent_money'
label='Ingrese el valor de sus ingresos mensuales:'
placeholder='Ingrese sus ingresos:' 
type="number"
/>
<Form.Field>
<Checkbox 
id='form_parent_live'
label='Convivo con el estudiante solicitante'
/>

</Form.Field>

<Form.Group inline>
<label>Relación con familiares</label>
          <Form.Radio
            label='Madre'
            value={Relationship.Mother}
            checked={value === Relationship.Mother}

    
          />
          <Form.Radio
            label='Padre'
            value={Relationship.Phater}
            checked={value === Relationship.Phater}            
            
          />
            
        <Form.Radio 
label='Hermano'
value={Relationship.Brother}   
checked={value === Relationship.Brother}
        
        />
        
</Form.Group>
<Form.Input required fluid icon='name' 
iconPosition='left' 
id='form_parent_school'
label='Ingrese el CUE (código unico escolar) del alumno solicitante:'
placeholder='Ingrese el CUE del alumno solicitante:' 
type="text"
/>

<Button fluid  size='large'  type='submit' label='Cargar los datos'>Submit</Button>
</Segment>
</Form>
        
                </Grid.Column>
        </Grid>

    )

} 

export default observer(parentPage);