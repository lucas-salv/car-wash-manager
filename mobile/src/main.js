import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNav from './components/TabNav';
import CustomerList from './screens/CustomerList';
import About from './screens/About';

const Drawer = createDrawerNavigator();

export default function Main() {
    return (
        <>
            <StatusBar 
                barStyle="white-content"
                backgroundColor="transparent"
                translucent
            />
            <NavigationContainer>
                <Drawer.Navigator
                    drawerStyle={{
                        backgroundColor: "#ccc"
                    }}
                    drawerContentOptions={{
                        activeTintColor: "#1cade8",
                        inactiveTintColor: "#8a8a8a"
                    }}
                    hideStatusBar={true}
                >
                    <Drawer.Screen name="Agenda" component={TabNav} />
                    <Drawer.Screen name="Clientes" component={CustomerList} />
                    <Drawer.Screen name="Sobre" component={About} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}