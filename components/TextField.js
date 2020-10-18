import React from 'react';
import { TextInput } from 'react-native-paper';
import colors from "../data/color.json";

const TextField = (params) => {
  const [value, onChangeText] = React.useState(value);

  return (
    <TextInput
      {...params}
      style={{
        height: 48, 
        width: params.width, 
        backgroundColor: `${colors.neutralColor.lightest}`, 
        borderRadius: 8,
      }}
      label={params.label}
      placeholder={params.placeholder}
      value={params.value}
      mode="outlined"
      placeholderTextColor={colors.neutralColor.darker}
      onSubmitEditing={params.onSubmitEditing}
      error={params.error}
      autoCapitalize={params.autoCapitalize ? params.autoCapitalize : 'sentences'}
      autoCompleteType={params.autoCompleteType}
      color={colors.brandColor.primary}
      onChangeText={text => onChangeText(text)}
      clearButtonMode="while-editing"
      keyboardType={params.keyboardType ? params.keyboardType: 'default'}
      value={value}
    />
  );
}

export default TextField;