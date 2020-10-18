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
      style={[
        styles.btnStyle, 
        params.width ? {width: params.width} : {width: "100%"},
        params.height? {height: params.height} : {height: 60}]}
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
  btnStyle: {
    justifyContent: "center",
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 8,
    shadowOffset:{width: 2, height: 2,},
},
});

export default PrimaryButton;
