import {StyleProp, ViewProps} from 'react-native';

export type SignUpProps = {
  style?: StyleProp<ViewProps>;
  onPressSignUpButton: (email: string, password: string) => void;
  onPressLinkButton: () => void;
};
