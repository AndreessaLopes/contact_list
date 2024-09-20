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

  //comecou o componente com estado vazio e chama o render
  constructor(props) {
    super(props);

    this.state = {
      peoples: []
    };
  };

  //quando o componente for montado, busca-se a estrutura da api/dados e executa a funcao de callback
  //dai a partir do setState, ele criia o estado e renderiza novamente, passando os dados das pessoas [pessoa1. pessoa2, pessoa3, pessoa4, pessoa5]
  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        });
      });
    // return textElements;
  };

renderList() {
  //array vazio [].map
  const textElements = this.state.peoples.map(people =>{
    const { first } = people.name;
    return <Text key={ first }>{ first }</Text>
  });
  //key: Trata cada elemento da lista, nao como array(lista)
  // const textElements = names.map(name => {
  //   return <Text key={name}>{name}</Text>
  // });
  return textElements;
  /* Promises */
  /*uso a api axios, pego os dados pelo metodo get
  crio uma constante names passando uma nova forma de array pelo (map) pegando o primeiro nome de cada pessoa do results*/
  };
  render() {
    return (
      //dai ele renderiz o header
      <View>
        <Header title="Contacts" />
        <StatusBar style="auto" />
        { this.renderList() }
      </View>
    );
  }
}