import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

/*Para componentes Statefull
class Component extends React.Component{
    render(){
        return(
            <View></View>
        );
    }
}*/
/*
background-color:
backgroundColor:
*/

//Para componentes Stateless | Funcional
const Header = (props) => (
    <View style={style.container}>
        <Text style={style.title}>{ props.title}</Text>
    </View>
);

/*StyleSheet*/
const style = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#6ca2f7',

        /* Flex Box (para alinhamento de texto*/
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        color: 'white',
    },
});


export default Header;