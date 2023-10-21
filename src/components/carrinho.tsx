import React from 'react';
import { Text, Button, HStack, VStack, Box } from 'native-base';
import { TEMAS } from '../estilos/temas';

const CarrinhoCompras = () => {
  return (
    <VStack
      w={230}
      bg={TEMAS.colors.fundo}
      p={2}
      alignItems="center"
      space={2}
      flex={1}
      shadow={9}
      justifyContent="space-between"
    >
      <Box>
        <Text fontSize={TEMAS.fontSizes.sm} fontWeight="bold" alignSelf="center">Meu</Text>
        <Text fontSize={TEMAS.fontSizes.sm} fontWeight="bold">Carrinho</Text>
      </Box>
      <Box alignItems="center">
        <Text color={TEMAS.colors.white} fontWeight="bold" fontSize={TEMAS.fontSizes.sm}>Total:</Text>
        <Text color={TEMAS.colors.white} fontWeight="bold" fontSize={TEMAS.fontSizes.md} mb={2}>R$0,00</Text>
        <Button borderRadius="10" mb={5} w="168" bg={TEMAS.colors.btn}>
          <HStack space={1}>
            <Text color={TEMAS.colors.black} fontWeight="extrabold" fontSize={TEMAS.fontSizes.xs}>Finalizar</Text>
          </HStack>
        </Button>
        <Button
          mb={5}
          borderRadius="10"
          w="168"
          bg={TEMAS.colors.fundo}
          borderColor="black"
          borderWidth={2}
        >
          <HStack space={1}>
            <Text color={TEMAS.colors.white} fontWeight="extrabold" fontSize={TEMAS.fontSizes.xs}>Voltar</Text>
          </HStack>
        </Button>
      </Box>
    </VStack>
  );
};

export default CarrinhoCompras;
