import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Authentication from './Authentication/Authentication';
import CreateAccount from './CreateAccount/CreateAccount';
import Dashboard from './Dashboard/Dashboard';
import FillFormScreen from './Authentication/FillFormScreen';
import MyInformation from './Dashboard/myInformation/MyInformation';
import SettingsScreen from './Dashboard/settings/Settings';
import PractitionersScreen from './Dashboard/myInformation/PractitionersScreen';
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
                    <Stack.Screen name="Welcome" component={Authentication} />
                    <Stack.Screen name="Home Page" component={Dashboard} />
                    <Stack.Screen name="Fill Form" component={FillFormScreen} />
                    <Stack.Screen name="Create Account" component={CreateAccount}/>
                    <Stack.Screen
                        name="My Information"
                        component={MyInformation}
                    />
                    <Stack.Screen name="Settings" component={SettingsScreen} />
                    <Stack.Screen
                        name="Practitioners"
                        component={PractitionersScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
