import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Authentication from './Authentication/Authentication';
import Dashboard from './Dashboard/Dashboard';
import colorData from '../data/color.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: colorData.brandColor.primary,
        accent: colorData.brandColor.accent,
    },
};

export default function Routes() {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Authentication"
                        component={Authentication}
                    />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
