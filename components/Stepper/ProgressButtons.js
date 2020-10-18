import React from 'react';
import { View, ScrollView } from 'react-native';

const ProgressButtons = (props) => (
    <ScrollView>
        <View style={{marginTop: 32, marginBottom: 32}}>
            <View>
                {props.renderPreviousButton()}
            </View>
            <View style={{marginTop: 16}}>
                {props.renderNextButton()}
            </View>
        </View>
    </ScrollView>
);

export default ProgressButtons;