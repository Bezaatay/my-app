import strings from '@/src/helpers/string';
import React, {FunctionComponent, useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../atoms/button/button';
import Divider from '../../atoms/divider/divider';
import LinkButton from '../../atoms/linkButton/linkButton';
import TextInputWithIcon from '../../atoms/textInputWithIcon/textInputWithIcon';
import {styles} from './style';
import {SignUpProps} from './type';

const SignUp: FunctionComponent<SignUpProps> = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isPasswordMatch = password === confirmPassword;

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.title}>{strings.signUp}</Text>
      <TextInputWithIcon
        style={styles.input}
        iconName="mail"
        placeholder={strings.email}
        textStyle={styles.textInput}
        value={email}
        onChangeText={setEmail}
      />
      <TextInputWithIcon
        style={styles.input}
        iconName="lock1"
        placeholder={strings.password}
        textStyle={styles.textInput}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInputWithIcon
        style={styles.input}
        iconName="lock1"
        placeholder={strings.confirmPassword}
        textStyle={styles.textInput}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button
        style={styles.button}
        title={strings.signUp}
        textStyle={styles.buttonText}
        onPress={() => {
          isPasswordMatch && props.onPressSignUpButton(email, password);
        }}
      />
      <Divider text={strings.or} style={styles.dividerContainer} />

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text>{strings.haveAccount}</Text>
        <LinkButton text={strings.logIn} onPress={props.onPressLinkButton} />
      </View>
    </View>
  );
};
export default SignUp;
