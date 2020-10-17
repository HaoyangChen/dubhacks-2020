import * as React from "react";
import { StyleSheet } from 'react-native';
import { Button } from "react-native-paper";
import colors from "../data/color.json";

// params.width: controls the width of the button (ps. height is always set to 60px)
// params.color: controls the fill color of the button
// params.onPress: event happening after users press the button
// params.btnText: controls the text you want to display on the button
const PrimaryButton = (params) => {
  return (
    <Button 
      {...params}
      theme={{roundness: 8}}
      style={{width: params.width, height: 60}}
      color={ params.color ? params.color : colors.brandColor.primary}
      labelStyle={styles.textStyle}
      onPress={params.onPress}
      mode="contained" 
    >
    {params.btnText}
  </Button>
  );
};

const styles = StyleSheet.create( {
  textStyle: {
    fontSize: 18,
    fontFamily: 'Arial',
    color: colors.neutralColor.lightest,
    textAlign: 'center',
    textAlignVertical: 'center',
    textTransform: 'capitalize',
  },
});

export default PrimaryButton;
