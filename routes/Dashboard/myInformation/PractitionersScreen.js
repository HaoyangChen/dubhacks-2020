import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Platform,
    Dimensions,
} from 'react-native';
import * as firebase from 'firebase';
import colorData from '../../../data/color.json';
import { color } from 'react-native-reanimated';
import ContainedIconButton from '../../../components/ContainedIconButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const PractitionersScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.cardTopStyle}>
                <Image
                    source={require('../../../assets/myinformation/personalIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardTopText}>Practitioners</Text>
            </View>
            <View style={styles.cardBottomStyle}>
                <ContainedIconButton
                    iconName="save"
                    textColor={colorData.neutralColor.lightest}
                    btnText="Save Changes"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 21,
    },
    cardTopStyle: {
        width: '100%',
        backgroundColor: colorData.brandColor.primaryLighter,
        marginTop: 40,
        flexDirection: 'row',
        height: 55,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 90,
        paddingRight: 90,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBtnIcon: {
        width: 23,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
    },
    cardTopText: {
        color: colorData.neutralColor.lightest,
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        lineHeight: 31,
    },
    cardBottomStyle: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: colorData.neutralColor.lightest,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        padding: 28,
    },
});

export default PractitionersScreen;
