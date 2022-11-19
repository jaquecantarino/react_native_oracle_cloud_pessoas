import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    Card
} from '@rneui/theme-edge'

const PessoaAddComponente = ({navigation}) => {
  return (
    //é um fragmento, ele serve unicamente para agrupar coisas
    <>
        <Card>
            <Card.Title>Cadastro de Pessoas</Card.Title>
            <Card.Divider/>
        </Card>
    </>
  )
}

export default PessoaAddComponente

const styles = StyleSheet.create({})