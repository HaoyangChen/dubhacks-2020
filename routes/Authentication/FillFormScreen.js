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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FillFormScreen = ({ navigation }) => {
    return (
        <ScrollView style={{backgroundColor: colors.neutralColor.lightest}}>
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
                    onPress={() => navigation.navigate('Create Account')}
                >
                    <ContainedIconButton
                        textColor={colorData.neutralColor.lightest}
                        btnText="Start Filling the Form"
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerBottom: {
        paddingHorizontal: 24,
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
        marginTop: 64,
        marginBottom: 32,
    },
    normalText: {
        fontSize: 22,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        lineHeight: 37,
        color: colorData.neutralColor.darkest,
    },
    buttonStyle: {
        marginTop: '8%',
    },
});

export default FillFormScreen;
