import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import logo from "../../assets/logo.png";
import userStore from "../../stores/user.store";
import _ from "lodash";
import { StatusCodes } from "http-status-codes";
import { ScholarshipType } from "../../models/scholarshipType";
import { StateRequest } from "../../models/stateRequest";


const ViewScholarshipPage = () => {

const [dni, setDNI] = useState(40555);
const [name, setName] = useState("Bruno");
const [value, setValue] = useState(StateRequest.InStudy);

return (
<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
<Grid.Column style={{ maxWidth: 450 }}>
<Header as='h2' textAlign='center'>
Vista de la clasificación de las becas
</Header>


<div>
El nombre del alumno es: {name}
</div>
<div>
    El dni del alumno es: {dni}
</div>
<div>
    Su beca está {value}
</div>
</Grid.Column>
</Grid>


)
}


export default observer(ViewScholarshipPage);