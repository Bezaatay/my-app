import AntDesign from '@expo/vector-icons/AntDesign';
import React, {FunctionComponent} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './style';
import {TextInputWithIconProps} from './type';

const TextInputWithIcon: FunctionComponent<TextInputWithIconProps> = props => {
  const {secureTextEntry = false} = props;
  console.log(props.iconName);
  return (
    <View style={[styles.container, props.style]}>
      {props.iconName && <AntDesign name={props.iconName} size={18} color="grey" />}
      <TextInput
        placeholder={props.placeholder}
        style={props.textStyle}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInputWithIcon;
