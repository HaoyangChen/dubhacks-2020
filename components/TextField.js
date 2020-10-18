import React from 'react';
import { TextInput } from 'react-native';
import colors from "../data/color.json";

const TextField = (params) => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <TextInput
      {...params}
      style={{
        height: 48, 
        width: params.width, 
        backgroundColor: `${colors.neutralColor.lightest}`, 
        borderWidth: 1
      }}
      label={params.label}
      value={params.value}
      mode="outlined"
      onSubmitEditing={params.onSubmitEditing}
      error={params.error}
      autoCapitalize={params.autoCapitalize ? params.autoCapitalize : 'sentences'}
      color={colors.brandColor.primary}
      onChangeText={text => onChangeText(text)}
      clearButtonMode="while-editing"
      keyboardType={params.keyboardType ? params.keyboardType: 'default'}
      value={value}
    />
  );
}

export default TextField;