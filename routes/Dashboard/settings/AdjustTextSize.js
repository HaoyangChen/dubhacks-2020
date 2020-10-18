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
import colorData from '../../../data/color.json';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AdjustTextSize = ({ notification }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Image
                        source={require('../../../assets/settings/textsizeIcon.png')}
                        style={styles.headerIcon}
                    />
                    <Text style={styles.headerText}>Adjust text size</Text>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.option}>
                        <Text
                            style={[styles.optionText, styles.optionTextSmall]}
                        >
                            Small
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.option, styles.optionSelected]}
                    >
                        <Text
                            style={[styles.optionText, styles.optionTextMedium]}
                        >
                            Medium (Current)
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option}>
                        <Text style={[styles.optionText, styles.optionTextBig]}>
                            Large
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            styles.button,
                            styles.cancelButton,
                        ]}
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
                        style={[
                            styles.option,
                            styles.button,
                            styles.saveButton,
                        ]}
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
        backgroundColor: colorData.neutralColor.lightest,
        width: '90%',
        height: Math.floor(height / 6 - 22),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 40,
        borderRadius: 8,
        marginTop: 10,
    },
    optionText: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        textAlign: 'center',
        color: colorData.neutralColor.darkest,
    },
    optionTextSmall: {
        fontSize: 10,
        fontWeight: '200',
    },
    optionTextMedium: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    optionTextBig: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    optionSelected: {
        borderLeftWidth: 10,
        borderLeftColor: '#FCD16E',
        borderStyle: 'solid',
    },

    button: {
        flex: 1,
        flexDirection: 'row',
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

export default AdjustTextSize;
