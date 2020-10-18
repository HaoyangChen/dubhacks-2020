import React from 'react';
import { View, ScrollView} from 'react-native';

const ProgressButtonNoPrev = (props) => (
    <ScrollView>
        <View style={{marginTop: 32, marginBottom: 32}}>
            <View>
                {props.renderNextButton()}
            </View>
        </View>
    </ScrollView>
);

export default ProgressButtonNoPrev; 