import strings from '@/src/helpers/string';
import React, {FunctionComponent, useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../../atoms/button/button';
import Divider from '../../atoms/divider/divider';
import LinkButton from '../../atoms/linkButton/linkButton';
import TextInputWithIcon from '../../atoms/textInputWithIcon/textInputWithIcon';
import {styles} from './style';
import {SignInProps} from './type';

const SignIn: FunctionComponent<SignInProps> = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.title}>{strings.logIn}</Text>
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
      <View style={styles.forgotPasswordContainer}>
        {/* TODO remember me checkbox and forgot Password press */}
        <LinkButton text={strings.forgotPassword} onPress={() => {}} />
      </View>
      <Button
        style={styles.button}
        onPress={() => props.onPressSignUpButton(email, password)}
        title={strings.logIn}
        textStyle={styles.buttonText}
      />
      <Divider text={strings.or} style={styles.dividerContainer} />
      <View style={styles.linkButtonContainer}>
        <Text>{strings.noAccount}</Text>
        <LinkButton text={strings.register} onPress={props.onPressLinkButton} />
      </View>
      <Button
        style={styles.googleButton}
        onPress={() => {}}
        title={strings.google}
        leftIcon={require('../../../../assets/images/google.png')}
        leftIconStyle={styles.google}
        textStyle={{marginLeft: 8, fontWeight: 'bold'}}
      />
    </View>
  );
};

export default SignIn;
