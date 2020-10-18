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
            <View style={styles.wrapper}>
                {/* Header */}
                <View style={styles.header}>
                    <Image
                        source={require('../../../assets/settings/notificationIcon.png')}
                        style={styles.headerIcon}
                    />
                    <Text style={styles.headerText}>Notification</Text>
                </View>
                {/* Selection list */}
                <View style={styles.content}>
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
        flex: 1,
        marginRight: 'auto',
        paddingLeft: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
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

export default Notifications;
