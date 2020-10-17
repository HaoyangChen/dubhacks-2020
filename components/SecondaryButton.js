import * as React from "react";
import { StyleSheet } from 'react-native';
import { Button } from "react-native-paper";
import colors from "../data/color.json";

// params.width: controls the width of the button (ps. height is always set to 60px)
// params.color: controls the border color of the button
// params.onPress: event happening after users press the button
// params.btnText: controls the text you want to display on the button
const SecondaryButton = (params) => {
  return (
    <Button 
      {...params}
      theme={{roundness: 8}}
      style={{width: params.width, height: 60, borderWidth: 1}}
      color={ params.color ? params.color : colors.neutralColor.darker}
      labelStyle={styles.textStyle}
      onPress={params.onPress}
      mode="outlined" 
    >
    {params.btnText}
  </Button>
  );
};

const styles = StyleSheet.create( {
  textStyle: {
    fontSize: 18,
    fontFamily: 'Arial',
    color: colors.brandColor.primary,
    textTransform: 'capitalize',
  },
});

export default SecondaryButton;
