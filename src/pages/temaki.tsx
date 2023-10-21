import { Text, ScrollView, Image, HStack, Button, Icon } from 'native-base';
import { Ionicons } from "@expo/vector-icons";
import Logo from '../assets/Logo.png';
import CardProduto from '../components/cardproduto';
import Produto from '../assets/Temaki.png'
import React from 'react'

function Temaki({navigation}) {
  return (
    <HStack flex={1}>
    <ScrollView background="#F04D4E" p={5}>
      <Image
        source={Logo}
        alt="Logo"
        size={100}
      />
      <Button mt={3} w={12} h={12} shadow={5} bg="#F95D5E" leftIcon={<Icon as={Ionicons} name="chevron-back-outline" color="black" />} onPress={() => navigation.navigate('Home')}/>
      <Text fontSize={40} color="white" fontWeight="bold" mb={5} mt={2}>Temakis</Text>
      <HStack space={2} flexWrap="wrap" display="flex" alignItems="center" alignSelf="center" justifyContent="center">
      <CardProduto nome="Temaki Salmão" preco={9.99} imagem={Produto} />
      <CardProduto nome="Temaki Cubex" preco={9.99} imagem={Produto} />
      <CardProduto nome="Temaki Filadelfia" preco={9.99} imagem={Produto} />
      <CardProduto nome="Temaki Crispy" preco={9.99} imagem={Produto} />
      <CardProduto nome="Temaki Couve" preco={9.99} imagem={Produto} />
      <CardProduto nome="Temaki Dori" preco={9.99} imagem={Produto} />
      <CardProduto nome="Temaki Shimeji" preco={9.99} imagem={Produto} />
      </HStack>
    </ScrollView>
    </HStack>
  )
}

export default Temaki