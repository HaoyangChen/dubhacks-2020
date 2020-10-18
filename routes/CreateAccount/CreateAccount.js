import React, { useState, useRef } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import RadioButtons from '../../components/RadioButton';
import colorData from '../../data/color.json';
import ProgressSteps from '../../components/Stepper/ProgressSteps';
import ProgressStep from '../../components/Stepper/ProgressStep';
import TextField from '../../components/TextField';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

const CreateAccount = ({ navigation }) => {
    //first step validation

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNum, setPhoneNum] = useState(0);
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [sex, setSex] = useState(0);

    // Second step
    const [insuranceName, setInsuranceName] = useState('');
    const [insuranceID, setInsuranceID] = useState('');
    const [govIdType, setGovIdType] = useState(0);
    const [govermentID, setGovermentID] = useState('');

    // third step
    const [cardholderName, setCardholderName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expDate, setExpDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [streetAddress1, setStreetAddress1] = useState('');
    const [streetAddress2, setStreetAddress2] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');

    // state for scroll and enter jump to next input
    let scrollRef = useRef(null);
    var sex_props = [
        { label: 'Male', value: 0 },
        { label: 'Female', value: 1 },
    ];

    var govId_props = [
        { label: "Driver's License", value: 0 },
        { label: 'Social Security Number', value: 1 },
    ];

    return (
        <ScrollView
            style={{ backgroundColor: colorData.neutralColor.lightest }}
            showsVerticalScrollIndicator={true}
            ref={(ref) => {
                scrollRef = ref;
            }}
            keyboardDismissMode="on-drag"
        >
            <View style={styles.container}>
                <View style={styles.bodyContainer}>
                    <ProgressSteps topOffset={24} marginBottom={32}>
                        <ProgressStep
                            label="Basic Info"
                            nextBtnText={'Proceed to Insurance'}
                            nextBtnStyle={styles.nextBtnStyle}
                            nextBtnTextStyle={styles.nextBtnTextStyle}
                            previousBtnStyle={styles.prevBtnStyle}
                            previousBtnTextStyle={styles.prevBtnTextStyle}
                        >
                            <ScrollView>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="First Name"
                                        autoCompleteType="username"
                                        placeholder={
                                            'Type to enter your first name'
                                        }
                                        onChangeText={(firstName) =>
                                            setFirstName(firstName)
                                        }
                                        value={firstName}
                                    />
                                </View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="Last Name"
                                        autoCompleteType="username"
                                        placeholder={
                                            'Type to enter your last name'
                                        }
                                        onChangeText={(lastName) =>
                                            setLastName(lastName)
                                        }
                                        value={lastName}
                                    />
                                </View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="Phone Number"
                                        autoCompleteType="tel"
                                        placeholder={'(000)-000-0000'}
                                        onChangeText={(phoneNum) =>
                                            setPhoneNum(phoneNum)
                                        }
                                        value={phoneNum}
                                    />
                                </View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="Date of Birth"
                                        placeholder={'MM/DD/YYYY'}
                                        onChangeText={(dateOfBirth) =>
                                            setDateOfBirth(dateOfBirth)
                                        }
                                        value={dateOfBirth}
                                    />
                                </View>
                                <View style={styles.spacing}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontFamily: 'Arial',
                                            marginBottom: 16,
                                            color:
                                                colorData.neutralColor.darkest,
                                        }}
                                    >
                                        Select your sex
                                    </Text>
                                    <RadioButtons
                                        radios={sex_props}
                                        initial={0}
                                        formHorizontal={true}
                                        onPress={(value) => {
                                            this.setState({ value: value });
                                        }}
                                    />
                                </View>
                            </ScrollView>
                        </ProgressStep>

                        <ProgressStep
                            label="Insurance"
                            nextBtnText={'Proceed to Payment'}
                            previousBtnText={'Back to Basic Info'}
                        >
                            <View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="Insurance Company Name"
                                        placeholder={
                                            'Type to enter your insurance company'
                                        }
                                        onChangeText={(insuranceName) =>
                                            setInsuranceName(insuranceName)
                                        }
                                        value={insuranceName}
                                    />
                                </View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="Insurance ID"
                                        placeholder={
                                            'Type to enter your Insurance ID'
                                        }
                                        onChangeText={(insuranceID) =>
                                            setInsuranceID(insuranceID)
                                        }
                                        value={insuranceID}
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View style={styles.spacing}>
                                    <Text
                                        style={[
                                            styles.titleStyle,
                                            { marginBottom: 12 },
                                        ]}
                                    >
                                        Goverment Issued Identification Type
                                    </Text>
                                    <RadioButtons
                                        radios={govId_props}
                                        initial={0}
                                        labelColor={
                                            colorData.brandColor.primaryLighter
                                        }
                                    />
                                </View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="Goverment ID"
                                        placeholder="Type to enter your Goverment ID"
                                        onChangeText={(govermentID) =>
                                            setGovermentID(govermentID)
                                        }
                                        value={govermentID}
                                    />
                                </View>
                            </View>
                        </ProgressStep>

                        <ProgressStep
                            label="Payment"
                            finishBtnText={'Save and Proceed'}
                            previousBtnText={'Back to Insurance'}
                            onSubmit={() => navigation.navigate('Home Page')}
                        >
                            <View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="Cardholder Name"
                                        placeholder={
                                            'Type to enter your the name on your card'
                                        }
                                        onChangeText={(cardholderName) =>
                                            setCardholderName(cardholderName)
                                        }
                                        value={cardholderName}
                                    />
                                </View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="Card Number"
                                        placeholder={
                                            'Type to enter your card number'
                                        }
                                        autoCompleteType="cc-number"
                                        onChangeText={(cardNumber) =>
                                            setCardNumber(cardNumber)
                                        }
                                        value={cardNumber}
                                        keyboardType="number-pad"
                                    />
                                </View>
                                <View style={styles.row}>
                                    <View
                                        style={[styles.spacing, { width: 155 }]}
                                    >
                                        <TextField
                                            label="Expiration Date"
                                            placeholder={'MM/YY'}
                                            autoCompleteType="cc-exp"
                                            onChangeText={(expDate) =>
                                                setExpDate(expDate)
                                            }
                                            value={expDate}
                                            keyboardType="number-pad"
                                        />
                                    </View>
                                    <View
                                        style={[styles.spacing, { width: 155 }]}
                                    >
                                        <TextField
                                            label="CVV"
                                            placeholder={'3-digit'}
                                            onChangeText={(cvv) => setCVV(cvv)}
                                            value={cvv}
                                            keyboardType="number-pad"
                                        />
                                    </View>
                                </View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="Street Address Line 1"
                                        placeholder={
                                            'Type to enter your street address'
                                        }
                                        autoCompleteType="street-address"
                                        onChangeText={(streetAddress1) =>
                                            setStreetAddress1(streetAddress1)
                                        }
                                        value={streetAddress1}
                                    />
                                </View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="Street Address Line 2 (Optional)"
                                        autoCompleteType="street-address"
                                        onChangeText={(streetAddress2) =>
                                            setStreetAddress2(streetAddress2)
                                        }
                                        value={streetAddress2}
                                    />
                                </View>
                                <View style={styles.row}>
                                    <View
                                        style={[styles.spacing, { width: 155 }]}
                                    >
                                        <TextField
                                            label="City"
                                            placeholder={'Enter your city'}
                                            onChangeText={(city) =>
                                                setCity(city)
                                            }
                                            value={city}
                                        />
                                    </View>
                                    <View
                                        style={[styles.spacing, { width: 155 }]}
                                    >
                                        <TextField
                                            label="ZIP Code"
                                            placeholder={'Ex. 98101'}
                                            autoCompleteType="postal-code"
                                            onChangeText={(zipCode) =>
                                                setZipCode(zipCode)
                                            }
                                            value={zipCode}
                                        />
                                    </View>
                                </View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="State or Province"
                                        placeholder={
                                            'Type to enter your state or province'
                                        }
                                        onChangeText={(state) =>
                                            setState(state)
                                        }
                                        value={state}
                                    />
                                </View>
                                <View style={styles.spacing}>
                                    <TextField
                                        label="Country"
                                        placeholder={
                                            'Type to enter your country'
                                        }
                                        onChangeText={(country) =>
                                            setCountry(country)
                                        }
                                        value={country}
                                    />
                                </View>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    bodyContainer: {
        paddingHorizontal: 24,
    },
    text: {
        fontFamily: 'Arial',
        alignSelf: 'flex-start',
        marginTop: '8%',
        fontSize: 18,
        color: colorData.neutralColor.dark,
    },
    spacing: {
        marginTop: 16,
        borderRadius: 8,
    },
    nextBtnStyle: {
        backgroundColor: colorData.brandColor.primary,
    },
    prevBtnStyle: {
        backgroundColor: colorData.neutralColor.lightest,
    },
    nextBtnTextStyle: {
        textAlign: 'center',
        color: colorData.neutralColor.lightest,
    },
    prevBtnTextStyle: {
        textAlign: 'center',
        color: colorData.brandColor.primary,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleStyle: {
        fontSize: 18,
        fontFamily: 'Arial',
    },
});

export default CreateAccount;
