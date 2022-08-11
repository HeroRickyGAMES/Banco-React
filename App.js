
//Programado por HeroRickyGames

import React, { Component } from "react";
import {StyleSheet ,View, Text, TextInput, Switch, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import Slider from '@react-native-community/slider';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        {sexoNome: 'Masculino', valor: 1},
        {sexoNome: 'Feminino', valor: 2},
      ],
      limite: 250,
      estudante: false,
    };

    this.enviarDados = this.enviarDados.bind(this);
  }
  enviarDados(){
    if(this.state.nome === '' || this.state.idade === ''){
      alert('Preencha todos os dados!')
      return;
    }

    alert(
      'Conta aberta com sucesso!! \n\n' + 
      'Nome: '+this.state.nome + '\n' + 
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: '+ this.state.sexos[this.state.sexo].sexoNome + ' \n' +
      'Limite Conta: ' + this.state.limite.toFixed(2) + '\n' +
      'Conta Estudante: ' + ((this.state.estudante)? 'Ativo' : 'Inativo')
    )
  }

  render(){

    //Ele verifica o Sexo da Pessoa e registra
      let sexoItems = this.state.sexos.map((v, k) => {
        return <Picker.Item key={k} value={k} label={v.sexoNome}/>
      });


    return(
      <View style={styles.container}>

      
      <View style={styles.statusbar}>
      <Text style={styles.textLogo}>Banco React</Text>
      <Text style={styles.textsubLogo}>Seu banco prático</Text>
      </View>

        <View style={styles.namecontainer}>
        <Text style={styles.text}>Nome: </Text>
        <TextInput
        style={styles.input}
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({nome: texto})}
        />
        </View>
        <View style={styles.namecontainer}>
        <Text style={styles.text}>Idade: </Text>
        <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        underlineColorAndroid="transparent"
        onChangeText={(texto) => this.setState({idade: texto})}
        keyboardType="numeric"
        />
        </View>
        
      <View style={styles.pickercontainer}>
        <Text style={styles.text}>Seu sexo:</Text>
        <Picker style={styles.pickerSexo} 
                  selectedValue={this.state.sexo} 
                  onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>  
                            
          {sexoItems}
        </Picker>

        </View>
        <View style={styles.limitarea}>
        <Text style={styles.text}>Selecione seu limite:</Text>
        <Slider
        minimumTrackTintColor="#CF0000"
        minimumValue={250} 
        maximumValue={4000}
        value={this.state.limite}
        onValueChange={(limite) => this.setState({limite: limite})}
        />
        </View> 

      <View style={styles.estudanteArea}>
        <Text style={styles.text}>Estudante?:</Text>
        <Switch
        style={{paddingTop: 15}}
        trackColor="#00c300"
        value={this.state.estudante}
        onValueChange={(valorEstudante) => this.setState({estudante: valorEstudante})}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={this.enviarDados} underlayColor="#000000">
      <Text style={styles.textAbrirConta}>Abrir conta</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    text:{
      fontSize: 20,
    },
    input:{
      fontSize: 17,
      borderRadius: 1,
      borderWidth: 4,
      borderColor: '#999999',
      color: '#fff',
      height: 38,
      padding: 10,
      marginBottom: 5,
      marginTop: 5,
    },
    namecontainer:{
      flexDirection: 'column',
      margin: 10,
      marginTop: 25
    },
    textLogo:{
      fontSize: 40,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 20,
      marginHorizontal: 20
    },
    textsubLogo:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
      marginHorizontal: 20
    },
    statusbar:{
      backgroundColor:'red',
      alignItems: 'center',
    },
    pickercontainer:{
      flexDirection: 'column',
      marginTop: 10,
      marginHorizontal: 10
    },
    limitarea:{
      flexDirection: 'column',
      margin: 10,
      marginTop: 25
    },
    estudanteArea:{
      padding: 10,
      flexDirection: 'row',
      alignItems: "center"
    },
    botao:{
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
      borderRadius: 150,
      margin: 20
    },
    textAbrirConta:{
      fontSize: 25,
      fontWeight: 'bold'
    }
});

export default App

