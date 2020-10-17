import * as React from 'react';
import { AppLoading } from 'expo';
import * as Linking from 'expo-linking';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import colorData from './data/color.json';
import LoginScreen from './routes/Authentication/LoginScreen';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: colorData.brandColor.primary,
        accent: colorData.brandColor.accent,
    },
};

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
