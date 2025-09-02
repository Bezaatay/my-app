import strings from '@/src/helpers/string';
import {flexBox} from '@/src/helpers/styleHelper';
import {supabase} from '@/src/service/supabase_client';
import {useRouter} from 'expo-router';
import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';

const Profile = () => {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession();
  };

  const handleLogOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    router.navigate('/(auth)');
  };

  return (
    <View style={styles.container}>
      <Button title={strings.logOut} onPress={handleLogOut} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...flexBox('column', 'center', 'center'),
  },
});
