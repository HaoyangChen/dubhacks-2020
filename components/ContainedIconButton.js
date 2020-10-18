import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const ContainedIconButton = (params) => {
    return (
        <Button
            theme={{ roundness: 8 }}
            style={[
                styles.btnStyle,
                params.width ? { width: params.width } : { width: '100%' },
                params.height ? { height: params.height } : { height: 60 },
            ]}
            color={params.btnColor}
            icon={({ color }) => (
                <FontAwesome
                    name={params.iconName}
                    style={[styles.iconStyle, { color: color }]}
                />
            )}
            labelStyle={[
                styles.containedButtonLabel,
                { color: params.textColor },
            ]}
            mode={params.btnMode ? params.btnMode : 'contained'}
        >
            {params.btnText}
        </Button>
    );
};

const styles = StyleSheet.create({
    containedButtonLabel: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        textTransform: 'capitalize',
        fontWeight: 'normal',
    },
    btnStyle: {
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 1,
        elevation: 6,
        shadowRadius: 8,
        shadowOffset: { width: 2, height: 2 },
    },
    iconStyle: {
        transform: [{ scale: 1.5 }],
        marginRight: 8,
    },
});

export default ContainedIconButton;
