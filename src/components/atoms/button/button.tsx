import React, {FunctionComponent} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {ButtonProps} from './type';

const Button: FunctionComponent<ButtonProps> = props => {
  return (
    <TouchableOpacity style={[styles.container, props.style]} {...props}>
      {props.leftIcon && <Image style={props.leftIconStyle} source={props.leftIcon} />}
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
