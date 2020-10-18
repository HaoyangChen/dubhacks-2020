import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';

import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from 'react-native-simple-radio-button';

import colorData from '../../../data/color.json';

const radio_props = [
    { label: 'As soon as I make an appointment', value: 0 },
    { label: 'After my appointment', value: 1 },
];

const PaymentSettings = ({ notification }) => {
    const [index, setIndex] = useState(0);
    return (
        <ScrollView style={styles.container}>
            <View>
                {/* Header */}
                <View style={styles.cardTopStyle}>
                    <Image
                        source={require('../../../assets/settings/notificationIcon.png')}
                        style={styles.cardBtnIcon}
                    />
                    <Text style={styles.cardTopText}>Payment Settings</Text>
                </View>

                <View style={styles.cardBottomStyle}>
                    <Text
                        style={[
                            styles.cardText,
                            { color: colorData.neutralColor.darkest },
                        ]}
                    >
                        Charge me for the service
                    </Text>
                    {/* Selection list */}
                    <RadioForm
                        formHorizontal={false}
                        animation={true}
                        style={styles.form}
                    >
                        {/* To create radio buttons, loop through your array of options */}
                        {radio_props.map((obj, i) => (
                            <View style={styles.option}>
                                <RadioButton labelHorizontal={true} key={i}>
                                    <RadioButtonInput
                                        obj={obj}
                                        index={i}
                                        isSelected={index === i}
                                        onPress={() => setIndex(i)}
                                        borderWidth={1}
                                        buttonInnerColor={
                                            colorData.brandColor.primaryLighter
                                        }
                                        buttonOuterColor={'#000'}
                                        buttonSize={15}
                                        buttonOuterSize={25}
                                        buttonStyle={{}}
                                    />
                                    <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        labelHorizontal={true}
                                        onPress={() => setIndex(i)}
                                        labelStyle={{
                                            fontSize: 16,
                                            color: 'black',
                                        }}
                                        labelWrapStyle={{}}
                                    />
                                </RadioButton>
                            </View>
                        ))}
                    </RadioForm>

                    {/* Save and cancel button */}
                    <TouchableOpacity
                        style={[styles.button, styles.cancelButton]}
                    >
                        <Image
                            source={require('../../../assets/settings/cancelIcon.png')}
                            style={[styles.buttonIcon, styles.cancelIcon]}
                        />
                        <Text style={[styles.buttonText, styles.cancelText]}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.saveButton]}
                    >
                        <Image
                            source={require('../../../assets/settings/saveIcon.png')}
                            style={styles.buttonIcon}
                        />
                        <Text style={[styles.buttonText, styles.saveText]}>
                            Save Change
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },

    cardTopStyle: {
        width: '100%',
        backgroundColor: colorData.brandColor.primaryLighter,
        marginTop: 24,
        flexDirection: 'row',
        height: 62,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBtnIcon: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'stretch',
    },
    cardTopText: {
        color: colorData.neutralColor.lightest,
        fontSize: 22,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        lineHeight: 37.4,
        marginLeft: 12,
    },
    cardText: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 22,
        color: colorData.neutralColor.darkest,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
    },
    cardBottomStyle: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: colorData.neutralColor.lightest,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
        padding: 28,
        alignItems: 'center',
        flex: 1,
        marginBottom: 80,
    },

    content: {
        flex: 1,
        alignItems: 'center',
    },

    option: {
        paddingTop: 15,
        marginLeft: -10,
    },
    form: {
        marginBottom: 30,
        marginTop: 10,
    },

    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
    },

    buttonIcon: {
        width: 20,
        height: 20,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        textAlign: 'center',
        width: '50%',
        fontStyle: 'normal',
        textAlign: 'center',
    },

    saveButton: {
        backgroundColor: colorData.brandColor.primaryLighter,
    },
    saveIcon: {
        backgroundColor: colorData.neutralColor.lightest,
    },

    saveText: {
        marginLeft: 0,
        color: colorData.neutralColor.lightest,
    },

    cancelButton: {
        borderRadius: 8,
        borderColor: colorData.brandColor.primaryLighter,
        borderStyle: 'solid',
        borderWidth: 2,
    },
    cancelIcon: {
        //backgroundColor: colorData.brandColor.primaryLighter,
    },
    cancelText: {
        marginLeft: -15,
        color: colorData.brandColor.primaryLighter,
        fontSize: 18,
    },
});

export default PaymentSettings;
