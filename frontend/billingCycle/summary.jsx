import React, { Component } from 'react'

import Grid from '../src/common/layout/grid'
import Row from '../src/common/layout/row'
import ValueBox from '../src/common/widget/valueBox'

export default ({ credit, debt }) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos'></ValueBox>
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débitos'></ValueBox>
                <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit-debt}`} text='Valor Consolidado'></ValueBox>
            </Row>
        </fieldset>
    </Grid>

)