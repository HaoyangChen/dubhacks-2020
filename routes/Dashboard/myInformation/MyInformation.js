import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import * as firebase from 'firebase';
import colorData from '../../../data/color.json';
import { color } from 'react-native-reanimated';
import ContainedIconButton from '../../../components/ContainedIconButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MyInformation = () => {
    return (
        <View>
            <TouchableOpacity style={styles.cardBtnStyle}>
                <Image
                    source={require('../../../assets/myinformation/personalIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Manage Appointments</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardBtnStyle: {
        backgroundColor: colorData.brandColor.primaryLighter,
        width: width,
        height: Math.floor(width / 2 - 15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBtnIcon: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        lineHeight: 31,
        textAlign: 'center',
        marginTop: 10,
        color: colorData.neutralColor.lightest,
    },
});

export default MyInformation;
