import React from 'react';
import { Text, Image, Button, Box, Icon, View } from 'native-base';
import { TEMAS } from '../estilos/temas';
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from 'react-native';

const CardProduto = (props) => {

  function filterDesc(desc){
    if(desc.length < 18){
      return desc;
    }
    return `${desc.substring(0, 25)}...`;
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Image
      source={props.imagem}
      style={styles.produto}
      />
      <Text style={styles.titulo}>{filterDesc(props.nome)}</Text>
      <View opacity={0.7}>
      <Text style={styles.valor}>{props.preco}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingVertical: '2%',
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor:"black",
    borderRadius: 20,
    marginBottom: 20,
    width: 200,
  },
  produto:{
    width: '100%',
    height: 160,
    marginBottom: 5,
    marginTop: -15,
    borderRadius: 20
  },
  titulo:{
    fontSize: 20,
    fontWeight: "bold"
  },
  valor:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  }
})

export default CardProduto;
