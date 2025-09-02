import React, {FunctionComponent} from 'react';
import {Pressable, Text} from 'react-native';
import {style} from './style';
import {LinkButtonProps} from './type';

const LinkButton: FunctionComponent<LinkButtonProps> = props => {
  return (
    <Pressable onPress={props.onPress} style={style.container}>
      <Text style={style.text}>{props.text}</Text>
    </Pressable>
  );
};

export default LinkButton;
