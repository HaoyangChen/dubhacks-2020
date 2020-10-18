import React, { useEffect, useState } from 'react';
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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const radio_props = [
    { label: 'As soon as I make an appointment', value: 0 },
    { label: 'After my appointment', value: 1 },
];

const PaymentSettings = ({ notification }) => {
    const [index, setIndex] = useState(0);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
                {/* Header */}
                <View style={styles.header}>
                    <Image
                        source={require('../../../assets/settings/notificationIcon.png')}
                        style={styles.headerIcon}
                    />
                    <Text style={styles.headerText}>Payment settings</Text>
                </View>

                <View style={styles.content}>
                    <Text>Charge me for the service</Text>
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
                                            fontSize: 14,
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
                            Save change
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 21,
    },
    wrapper: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    header: {
        backgroundColor: colorData.brandColor.primaryLighter,
        width: '100%',
        flex: 1,
        height: Math.floor(width / 6),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headerIcon: {
        width: 20,
        height: 20,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 14,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        textAlign: 'center',
        width: '50%',
        marginLeft: -15,
        color: colorData.neutralColor.lightest,
        fontStyle: 'normal',
        textAlign: 'center',
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
        marginTop: 20,
    },

    button: {
        backgroundColor: colorData.neutralColor.lightest,
        width: '90%',
        height: Math.floor(height / 6 - 22),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 40,
        borderRadius: 8,
        marginTop: 10,
        flex: 1,
    },
    buttonIcon: {
        width: 20,
        height: 20,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
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
        backgroundColor: colorData.brandColor.lightest,
        borderRadius: 5,
        borderColor: colorData.brandColor.primaryLighter,
        borderStyle: 'solid',
        borderWidth: 1,
    },
    cancelIcon: {
        //backgroundColor: colorData.brandColor.primaryLighter,
    },
    cancelText: {
        marginLeft: -15,
        color: colorData.brandColor.primaryLighter,
    },
});

export default PaymentSettings;
