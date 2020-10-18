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
import CheckBox from '@react-native-community/checkbox';

import colorData from '../../../data/color.json';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Notifications = ({ notification }) => {
    const [toggle_1, setToggle1] = useState(false);
    const [toggle_2, setToggle2] = useState(false);
    const [toggle_3, setToggle3] = useState(false);
    const [toggle_4, setToggle4] = useState(false);
    const [toggle_5, setToggle5] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View>
                {/* Header */}
                <View style={styles.cardTopStyle}>
                    <Image
                        source={require('../../../assets/settings/notificationIcon.png')}
                        style={styles.cardBtnIcon}
                    />
                    <Text style={styles.cardTopText}>Notification</Text>
                </View>
                {/* Selection list */}
                <View style={styles.cardBottomStyle}>
                    <Text>I want to receive notifications about ...</Text>
                    <View style={styles.option}>
                        <CheckBox
                            disabled={false}
                            value={toggle_1}
                            onValueChange={(newValue) => {
                                setToggle1(newValue);
                            }}
                        />
                        <Text>Everything</Text>
                    </View>
                    <View style={styles.option}>
                        <CheckBox
                            disabled={false}
                            value={toggle_2}
                            onValueChange={(newValue) => {
                                // Do some data collect/state toggle here
                                setToggle2(newValue);
                            }}
                        />
                        <Text>Upcoming appointment</Text>
                    </View>
                    <View style={styles.option}>
                        <CheckBox
                            disabled={false}
                            value={toggle_3}
                            onValueChange={(newValue) => {
                                // Do some data collect/state toggle here
                                setToggle3(newValue);
                            }}
                        />
                        <Text>Medication and Prescription</Text>
                    </View>
                    <View style={styles.option}>
                        <CheckBox
                            disabled={false}
                            value={toggle_4}
                            onValueChange={(newValue) => {
                                // Do some data collect/state toggle here
                                setToggle4(newValue);
                            }}
                        />
                        <Text>New chats</Text>
                    </View>
                    <View style={styles.option}>
                        <CheckBox
                            disabled={false}
                            value={toggle_5}
                            onValueChange={(newValue) => {
                                // Do some data collect/state toggle here
                                setToggle5(newValue);
                            }}
                        />
                        <Text>New charges to my bill</Text>
                    </View>

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

    cardTopStyle: {
        width: '100%',
        backgroundColor: colorData.brandColor.primaryLighter,
        marginTop: 40,
        flexDirection: 'row',
        height: 55,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 80,
        paddingRight: 80,
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
        alignItems: 'center',
        flex: 1,
        marginBottom: 80,
    },

    content: {
        flex: 1,
        alignItems: 'center',
    },

    option: {
        flex: 1,
        marginRight: 'auto',
        paddingLeft: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    button: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colorData.neutralColor.lightest,
        width: '100%',
        // height: Math.floor(height / 6 - 22),
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        borderRadius: 8,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
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
        borderRadius: 8,
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
        fontSize: 18,
    },
});

export default Notifications;
