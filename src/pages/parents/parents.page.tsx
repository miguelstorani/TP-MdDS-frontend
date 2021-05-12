import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import logo from "../../assets/logo.png";
import userStore from "../../stores/user.store";
import _, { size } from "lodash";
import { StatusCodes } from "http-status-codes";
import { emptyParent, Parents } from "../../models/parents";

const sendForm = (parent: Parents): void {
//todo  hacer algo para enviar ese familiar

}


const parentPage = () => {

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


</Segment>

</Form>
        
                </Grid.Column>
        </Grid>

    )

} 

export default observer(parentPage);