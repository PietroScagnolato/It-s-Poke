import { Text, ScrollView, Image, HStack, Button, Icon, View } from 'native-base';
import { Ionicons } from "@expo/vector-icons";

import Logo from '../assets/Logo.png';
import CardProduto from '../components/cardproduto';
import Produto from '../assets/Poke.png'

function Poke({ navigation }) {

  return (
    <HStack flex={1}>
      <View bg="#F04D4E">
        <ScrollView p={5}>
          <Image
            source={Logo}
            alt="Logo"
            size={100}
          />
          <Button mt={3} w={12} h={12} shadow={5} bg="#F95D5E" leftIcon={<Icon as={Ionicons} name="chevron-back-outline" color="black" />} onPress={() => navigation.navigate('Home')}/>
          <Text fontSize={40} color="white" fontWeight="bold" mb={5} mt={2}>Poke</Text>
          <HStack space={2} flexWrap="wrap" display="flex" alignItems="center" alignSelf="center" justifyContent="center">
            <CardProduto nome="Poke Aloha" preco="R$9.99" imagem={Produto} />
            <CardProduto nome="Poke da May :)" preco="R$9.99" imagem={Produto} />
            <CardProduto nome="Poke da Nutri" preco="R$9.99" imagem={Produto} />
            <CardProduto nome="Poke da Camys" preco="R$9.99" imagem={Produto} />
            <CardProduto nome="Poke Mahalo" preco="R$9.99" imagem={Produto} />
            <CardProduto nome="Poke Vegan" preco="R$9.99" imagem={Produto} />
            <CardProduto nome="Poke Moana" preco="R$9.99" imagem={Produto} />
          </HStack>
        </ScrollView>
      </View>
    </HStack>
  )
}

export default Poke
