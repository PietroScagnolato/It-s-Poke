import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Abertura from "./abertura";
import Home from "./pages/home";
import Poke from "./pages/poke";
import Bebidas from "./pages/bebidas";
import Hot_roll from "./pages/hot_roll";
import Lanches from "./pages/lanches";
import Maui from "./pages/maui";
import Monte_poke from "./pages/monte_poke";
import Porcoes from "./pages/porcoes";
import Pratos_quentes from "./pages/pratos_quentes";
import Temaki from "./pages/temaki";

const Tab = createNativeStackNavigator();

export default function Rotas(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name="Abertura" component={Abertura} options={{headerShown: false}}
                />
                <Tab.Screen
                name="Home" component={Home} options={{headerShown: false}}
                />
                <Tab.Screen
                name="Poke" component={Poke} options={{headerShown: false}}
                />
                <Tab.Screen
                name="Temakis" component={Temaki} options={{headerShown: false}}
                />
                <Tab.Screen
                name="Maui" component={Maui} options={{headerShown: false}}
                />
                <Tab.Screen
                name="Porções" component={Porcoes} options={{headerShown: false}}
                />
                <Tab.Screen
                name="Hot Roll" component={Hot_roll} options={{headerShown: false}}
                />
                <Tab.Screen
                name="Lanches" component={Lanches} options={{headerShown: false}}
                />
                <Tab.Screen
                name="Pratos Quentes" component={Pratos_quentes} options={{headerShown: false}}
                />
                <Tab.Screen
                name="Bebidas" component={Bebidas} options={{headerShown: false}}
                />
                <Tab.Screen
                name="Monte seu Poke" component={Monte_poke} options={{headerShown: false}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}