import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, CheckBox } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import colorData from '../data/color.json';

const ContainedIconButton = (params) => {
    return (
        <Button
            theme={{ roundness: 8 }}
            style={{ width: params.width, height: params.height }}
            color={colorData.brandColor.primary}
            icon={({ color }) => (
                <FontAwesome
                    name={params.iconName}
                    style={[styles.iconStyle, { color: color }]}
                />
            )}
            labelStyle={styles.containedButtonLabel}
            disabled={params.disabled}
            mode="contained"
        >
            {params.btnText}
        </Button>
    );
};

const styles = StyleSheet.create({
    containedButtonLabel: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        color: colorData.neutralColor.lightest,
        textTransform: 'capitalize',
    },
    iconStyle: {
        transform: [{ scale: 1.5 }],
        marginLeft: 5,
    },
});

export default ContainedIconButton;
