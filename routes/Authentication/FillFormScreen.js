import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    Platform,
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
            <View style={styles.containerBottom}>
                <Image
                    source={require('../../assets/fillform/formIcon.png')}
                    style={styles.loginGraphics}
                />
                <Text style={styles.normalText}>
                    Let me guide you to complete a form so that you can make an
                    appointment in the future easily.
                </Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('Home Page')}
                >
                    <ContainedIconButton
                        textColor={colorData.neutralColor.lightest}
                        btnText="Start Filling the Form"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerBottom: {
        paddingLeft: 21,
        paddingRight: 21,
    },
    titleStyle: {
        fontSize: 28,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'bold',
        lineHeight: 48,
        color: colorData.neutralColor.lightest,
    },
    homeHeaderStyle: {
        backgroundColor: colorData.brandColor.primary,
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginGraphics: {
        height: '42%',
        width: width,
        resizeMode: 'stretch',
    },
    normalText: {
        fontSize: 22,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        lineHeight: 37,
        color: colorData.neutralColor.darkest,
    },
    buttonStyle: {
        marginTop: '8%',
    },
});

export default FillFormScreen;
