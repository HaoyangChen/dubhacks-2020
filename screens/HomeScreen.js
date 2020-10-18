import {
    ImageBackground,
    View,
    StyleSheet,
    Image,
    Platform,
    Dimensions,
} from 'react-native';
import * as React from 'react';
import TextButton from '../../components/TextButton';
import colorData from '../../data/color.json';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomeScreen = () => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Home Screen</Text>
        </View>
    );
};

export default HomeScreen;
