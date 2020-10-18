import React from 'react';
import { View } from 'react-native';

const ProgressButtonNoPrev = (props) => (
    <View style={{ marginTop: 48 }}>
        <View style={{ position: 'absolute', right: 0, bottom: 0 }}>
            {props.renderNextButton()}
        </View>
    </View>
);

export default ProgressButtonNoPrev; 