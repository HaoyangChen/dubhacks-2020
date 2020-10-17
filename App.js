import React from 'react';
import * as firebase from 'firebase';
import { AppLoading } from 'expo';
import * as Linking from 'expo-linking';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import colorData from './data/color.json';

import firebaseConfig from './config/firebase.config';
import Routes from './routes/Routes';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: colorData.brandColor.primary,
        accent: colorData.brandColor.accent,
    },
};

firebase.initializeApp(firebaseConfig);

export default Routes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
