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
import ContainedIconButton from '../../../components/ContainedIconButton';
import colorData from '../../../data/color.json';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AdjustTextSize = ({ notification }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.cardTopStyle}>
                <Image
                    source={require('../../../assets/settings/textsizeIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardTopText}>Adjust Text Size</Text>
            </View>
            <View style={styles.cardBottomStyle}>
                <TouchableOpacity style={styles.option}>
                    <Text style={[styles.optionText, styles.optionTextSmall]}>
                        Small
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.option, styles.optionSelected]}
                >
                    <Text style={[styles.optionText, styles.optionTextMedium]}>
                        Medium (Current)
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={[styles.optionText, styles.optionTextBig]}>
                        Large
                    </Text>
                </TouchableOpacity>

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
        paddingLeft: 80,
        paddingRight: 80,
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
        lineHeight: 37.4,
        marginLeft: 12, 
    },

    cardBottomStyle: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderWidth: 0,
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

    option: {
        backgroundColor: colorData.neutralColor.lightest,
        width: '100%',
        // height: Math.floor(height / 6 - 22),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 30,
        borderWidth:0,
        borderRadius: 8,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },
    optionText: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        textAlign: 'center',
        color: colorData.neutralColor.darkest,
    },
    optionTextSmall: {
        fontSize: 18,
        lineHeight: 30.6,
    },
    optionTextMedium: {
        fontSize: 22,
        lineHeight: 37.4,
        fontWeight: 'normal',
    },
    optionTextBig: {
        fontSize: 28,
        lineHeight: 47.6,
    },

    optionSelected: {
        borderLeftWidth: 10,
        borderLeftColor: '#FCD16E',
        borderStyle: 'solid',
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
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
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
        marginLeft: 8,
        fontSize: 18,
        lineHeight: 30.6,
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
        lineHeight: 30.6
    },
});

export default AdjustTextSize;
