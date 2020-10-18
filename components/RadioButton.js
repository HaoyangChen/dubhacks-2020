import RadioForm from 'react-native-simple-radio-button';
import colors from "../data/color.json";
import * as React from "react";
 


const RadioButtons = (params) => {
    return (
        <RadioForm
          radio_props={params.radios}
          formHorizontal={params.formHorizontal}
          animation={true}
          labelColor={colors.brandColor.darkest}
          buttonColor={colors.brandColor.primaryLighter}
          initial={params.initial}
          onPress={params.onPress}
        >
        </RadioForm>

    )
};
export default RadioButtons;