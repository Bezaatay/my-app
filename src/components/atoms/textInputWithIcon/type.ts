import {AntDesign} from '@expo/vector-icons';
import {ComponentProps} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

type AntDesignIconName = ComponentProps<typeof AntDesign>['name'];

export type TextInputWithIconProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  iconName?: AntDesignIconName;
};
