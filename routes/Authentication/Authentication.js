import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from "../../data/color.json";
import ContainedIconButton from '../../components/ContainedIconButton';

const Authentication = () => {
    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/login_graphics.png')}
                style={styles.loginGraphics}
            />
            <View style={styles.safeArea}>
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
                        btnText="Continue with Gmail"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <ContainedIconButton
                        iconName="yahoo"
                        btnText="Continue with Yahoo"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <ContainedIconButton
                        iconName="phone"
                        btnText="Continue with Phone"
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.neutralColor.lightest,
    },
    safeArea: {
        marginHorizontal: 24,
    },
    loginGraphics: {
        height: '35%',
        width: '100%',
        resizeMode: 'stretch',
    },
    tapTitle: {
        fontSize: 28,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'bold',
        lineHeight: 48,
        textAlign: 'center',
        marginTop: 24,
        color:colors.neutralColor.darkest,
    },
    newMemberText: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        lineHeight: 31,
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 32,
        color:colors.neutralColor.darkest,
    },
    buttonStyle: {
        marginTop: 16,
    },
});

export default Authentication;
