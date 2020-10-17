import React from 'react';
import { Text, View } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';
import TextField from '../../components/TextField';

export default function Authentication() {
    return (
        <View>
            <Text>This is authentication </Text>
            <PrimaryButton
                style={{display: 'flex', justifyContent: 'center'}}
                btnText="Primary Button"
            />
            <SecondaryButton
                btnText="Secondary Button"
            />
            <TextField
                label="Text Field"
            />
        </View>
    );
}
