import React from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase';

import { AppContext } from './../../context/ContextProvider';
import * as firebase from 'firebase';

const provider = new firebase.auth.GoogleAuthProvider();

export default function LogIn({ navigation }) {
    const { login } = useContext(AppContext);

    return (
        <View>
            <Text>This is log in page</Text>
        </View>
    );
}
