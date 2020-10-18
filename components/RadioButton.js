import RadioForm from 'react-native-simple-radio-button';
import colors from "../data/color.json";
import * as React from "react";
 
var radio_props = [
  {label: 'goverment', value: 0 },
  {label: 'param2', value: 1 }
];

const RadioButton = (params) => {

    return (

        <RadioForm
          radio_props={radio_props}
          
          formHorizontal={true}
          animation={true}
          buttonColor={colors.brandColor.primaryLighter}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />

    )
};

export default RadioButton;