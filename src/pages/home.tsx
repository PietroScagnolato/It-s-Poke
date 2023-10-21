import { Text, ScrollView, Image, HStack } from 'native-base';
import CardAbertura from '../components/cardabertura';

import Logo from '../assets/Logo.png';
import Temakis from '../assets/Temaki.png';
import Maui from '../assets/Maui.png';
import Lanches from '../assets/Lanches.png';
import MonteSeuPoke from '../assets/MonteSeuPoke.png'
import Bebidas from '../assets/Bebidas.png'
import HotRoll from '../assets/HotRoll.png'
import PratoQuente from '../assets/PratosQuentes.png'
import Porcoes from '../assets/Porcoes.png'

function Home({ navigation }) {

  const Poke = require('../assets/Poke.png');


  return (
    <HStack flex={1}>
    <ScrollView background="#F04D4E" p={5}>
      <Image
        source={Logo}
        alt="Logo"
        size={100}
      />
      <Text fontSize={25} color="white" fontWeight="bold">Olá,</Text>
      <Text fontSize={20} color="white" fontWeight="bold" mb={5}>o que vai querer?</Text>
      <HStack space={2} flexWrap="wrap" display="flex" alignItems="center" alignSelf="center" justifyContent="center">
        <CardAbertura
        nome='Poke'
        onPress={() => navigation.navigate('Poke')}
        foto={Poke} />
        
        <CardAbertura
        nome='Temakis'
        onPress={() => navigation.navigate('Temakis')}
        foto={Temakis} />
        
        <CardAbertura
        nome='Maui'
        onPress={() => navigation.navigate('Maui')}
        foto={Maui} />
        
        <CardAbertura
        nome='Porções'
        onPress={() => navigation.navigate('Porções')}
        foto={Porcoes} />
        
        <CardAbertura
        nome='Hot Roll'
        onPress={() => navigation.navigate('Hot Roll')}
        foto={HotRoll} />
        
        <CardAbertura
        nome='Lanches'
        onPress={() => navigation.navigate('Lanches')}
        foto={Lanches} />
        
        <CardAbertura
        nome='Pratos Quentes'
        onPress={() => navigation.navigate('Pratos Quentes')}
        foto={PratoQuente} />
        
        <CardAbertura
        nome='Bebidas'
        onPress={() => navigation.navigate('Bebidas')}
        foto={Bebidas} />
        
        <CardAbertura
        nome='Monte seu Poke'
        onPress={() => navigation.navigate('Monte seu Poke')}
        isMonteSeuPoke={true}
        foto={MonteSeuPoke}
        />
      </HStack>
    </ScrollView>
    </HStack>
  )
}

export default Home