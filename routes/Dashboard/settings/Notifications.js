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
import CheckBox from 'react-native-check-box';

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
                <View style={styles.cardBottomStyle}>
                    <Text
                        style={[
                            styles.cardText,
                            { color: colorData.neutralColor.darkest },
                        ]}
                    >
                        I want to receive notifications about ...
                    </Text>
                    {/* Selection list */}
                    <View style={[styles.option, { marginTop: 24}]}>
                        <CheckBox
                            disabled={false}
                            rightTextStyle={styles.checkboxText}
                            checkBoxColor={colorData.brandColor.darker}
                            checkedCheckBoxColor={colorData.brandColor.primaryLighter}
                            isChecked={toggle_1}
                            onClick={() => {
                                setToggle1(!toggle_1);
                            }}
                        />
                        <Text>Everything</Text>
                    </View>
                    <View style={styles.option}>
                        <CheckBox
                            disabled={false}
                            rightTextStyle={styles.checkboxText}
                            checkBoxColor={colorData.brandColor.darker}
                            checkedCheckBoxColor={colorData.brandColor.primaryLighter}
                            isChecked={toggle_2}
                            onClick={() => {
                                // Do some data collect/state toggle here
                                setToggle2(!toggle_2);
                            }}
                        />
                        <Text>Upcoming appointment</Text>
                    </View>
                    <View style={styles.option}>
                        <CheckBox
                            disabled={false}
                            rightTextStyle={styles.checkboxText}
                            checkBoxColor={colorData.brandColor.darker}
                            checkedCheckBoxColor={colorData.brandColor.primaryLighter}
                            isChecked={toggle_3}
                            onClick={() => {
                                // Do some data collect/state toggle here
                                setToggle3(!toggle_3);
                            }}
                        />
                        <Text>Medication and Prescription</Text>
                    </View>
                    <View style={styles.option}>
                        <CheckBox
                            disabled={false}
                            rightTextStyle={styles.checkboxText}
                            checkBoxColor={colorData.brandColor.darker}
                            checkedCheckBoxColor={colorData.brandColor.primaryLighter}
                            isChecked={toggle_4}
                            onClick={() => {
                                // Do some data collect/state toggle here
                                setToggle4(!toggle_4);
                            }}
                        />
                        <Text>New chats</Text>
                    </View>
                    <View style={[styles.option, { marginBottom: 24 }]}>
                        <CheckBox
                            disabled={false}
                            rightTextStyle={styles.checkboxText}
                            checkBoxColor={colorData.brandColor.darker}
                            checkedCheckBoxColor={colorData.brandColor.primaryLighter}
                            isChecked={toggle_5}
                            onClick={() => {
                                // Do some data collect/state toggle here
                                setToggle5(!toggle_5);
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
        paddingLeft: 100,
        paddingRight: 100,
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
        marginLeft: 12,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        lineHeight: 37.4,
    },
    cardText: {
        fontSize: 22,
        lineHeight: 37.4,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        width: "100%",
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
        marginBottom: 64,
    },

    content: {
        flex: 1,
        alignItems: 'center',
    },

    option: {
        flex: 1,
        marginRight: 'auto',
        paddingLeft: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginLeft: -20,
        marginBottom: 24,
    },
    checkboxText: {
        fontSize: 16,
        color: colorData.neutralColor.darkest,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: "100%",
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
        lineHeight: 30.6,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        textAlign: 'center',
        width: '50%',
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
