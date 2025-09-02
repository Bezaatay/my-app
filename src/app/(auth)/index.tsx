import SignIn from '@/src/components/organism/signIn/signIn';
import SignUp from '@/src/components/organism/signUp/signUp';
import {flexBox} from '@/src/helpers/styleHelper';
import {supabase} from '@/src/service/supabase_client';
import {useNavigation, useRouter} from 'expo-router';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

const Index = () => {
  const router = useRouter();
  const navigation = useNavigation();

  const [isSignInActive, setIsSignInActive] = useState(true);

  useEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const toggleSignInSignUp = () => {
    setIsSignInActive(!isSignInActive);
  };

  const handleAuth = async (mail: string, password: string) => {
    if (isSignInActive) {
      await supabase.auth.signInWithPassword({email: mail, password: password});
    } else {
      await supabase.auth.signUp({email: mail, password: password});
    }
    router.navigate('/(tabs)');
  };

  return (
    <View style={styles.container}>
      {isSignInActive ? (
        <SignIn onPressLinkButton={toggleSignInSignUp} onPressSignUpButton={handleAuth} />
      ) : (
        <SignUp onPressLinkButton={toggleSignInSignUp} onPressSignUpButton={handleAuth} />
      )}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...flexBox('column', 'center', 'center'),
  },
});
