import {ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  leftIcon?: ImageSourcePropType;
  leftIconStyle?: StyleProp<ImageStyle>;
};
