import {StyleProp, ViewProps} from 'react-native';

export type SignInProps = {
  style?: StyleProp<ViewProps>;
  onPressSignUpButton: (email: string, password: string) => void;
  onPressLinkButton: () => void;
};
