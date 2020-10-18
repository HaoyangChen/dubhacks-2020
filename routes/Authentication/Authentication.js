import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ContainedIconButton from '../../components/ContainedIconButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Authentication = ({ navigation }) => {
    return (
        <View>
            <Image
                source={require('../../assets/login_graphics.png')}
                style={styles.loginGraphics}
            />
            <Text style={styles.tapTitle}>
                Tap on a button below to log in with your email
            </Text>
            <Text style={styles.newMemberText}>
                If you are a new member, you will be guided to create an
                account.
            </Text>
            <TouchableOpacity style={styles.buttonStyle}>
                <ContainedIconButton
                    iconName="google"
                    width="85%"
                    btnText="Continue with Gmail"
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
                <ContainedIconButton
                    iconName="yahoo"
                    width="85%"
                    btnText="Continue with Yahoo"
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Home Page')}
            >
                <ContainedIconButton
                    iconName="phone"
                    width="85%"
                    btnText="Continue with Phone"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    loginGraphics: {
        height: '35%',
        width: width,
        resizeMode: 'stretch',
    },
    tapTitle: {
        fontSize: 28,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'bold',
        lineHeight: 48,
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    newMemberText: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        lineHeight: 31,
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    buttonStyle: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Authentication;
