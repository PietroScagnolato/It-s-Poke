import React from 'react';
import { Text, Image, VStack, Button } from 'native-base';
import { TEMAS } from '../estilos/temas';
import { ImageBackground } from 'react-native';

interface CardProps {
  nome: string;
  foto: string;
  isMonteSeuPoke?: boolean;
  onPress?: () => void;
}

function CardAbertura({ nome, foto, isMonteSeuPoke, onPress }: CardProps) {
  const cardStyle = isMonteSeuPoke
    ? { background: '#F95D5E', borderRadius: 20, w: '664px', h: '151px' }
    : { background: '#F95D5E', borderRadius: 20, w: '328px', h: '151px' };

    return (
      <VStack flexDir="column" {...cardStyle} mb={2} borderRadius={20}>
        <ImageBackground source={foto} style={{ flex: 1 }} resizeMode="cover" borderRadius={20}>
          <VStack flex={1} justifyContent="center" alignItems="center">
            <Text m={2} fontSize={TEMAS.fontSizes.sm} bold color="white">
              {nome}
            </Text>
          </VStack>
          {onPress && (
            <Button
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0,
              }}
              onPress={onPress}
            />
          )}
        </ImageBackground>
      </VStack>
    );
}

export default CardAbertura;
