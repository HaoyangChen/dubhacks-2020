import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorData from './data/color.json';

import firebaseConfig from './config/firebase.config';
import Provider from './Provider';

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

export default Provider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
