import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../data/color.json';
import ContainedIconButton from '../../components/ContainedIconButton';
import colorData from '../../data/color.json';
import { color } from 'react-native-reanimated';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FillFormScreen = ({ navigation }) => {
    return (
        <View>
            <View style={[styles.homeHeaderStyle]}>
                <Text style={styles.titleStyle}>Welcome, John Doe</Text>
            </View>
            <Image
                source={require('../../assets/fillform/formIcon.png')}
                style={styles.loginGraphics}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 28,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'bold',
        lineHeight: 48,
        color: colorData.neutralColor.lightest,
    },
    homeHeaderStyle: {
        backgroundColor: colorData.brandColor.primary,
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginGraphics: {
        height: height * 0.3,
        width: width,
        resizeMode: 'stretch',
    },
});

export default FillFormScreen;
