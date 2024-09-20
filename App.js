import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import axios from 'axios';

import Header from './src/components/Header';
/**
 * The App function is a React component that serves as the main entry point for the application.
 * It returns a View component containing a Header component and a StatusBar component.
 *
 * @returns {JSX.Element} A JSX element containing the View, Header, and StatusBar components.
 */
export default class App extends React.Component {
  renderList() {
    //key: Trata cada elemento da lista, nao como array(lista)
    // const textElements = names.map(name => {
    //   return <Text key={name}>{name}</Text>
    // });

    /* Promises */
    /*uso a api axios, pego os dados pelo metodo get
    crio uma constante names passando uma nova forma de array pelo (map) pegando o primeiro nome de cada pessoa do results*/
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data;
        const names = results.map(people => people.name.first)
        console.log(names);
      });
    // return textElements;
  }

  render() {
    return (
      <View>
        <Header title="Contacts" />
        {this.renderList()}
        <StatusBar style="auto" />
      </View>
    );
  };
}