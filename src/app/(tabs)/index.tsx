import {flexBox} from '@/src/helpers/styleHelper';
import {supabase} from '@/src/service/supabase_client';
import {useRouter} from 'expo-router';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';

const Index = () => {
  const router = useRouter();

  const [session, setSession] = useState<any>(null);

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession();
    console.log(currentSession.data.session);
  };

  useEffect(() => {
    fetchSession();
  }, []);

  const handleLogOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    router.navigate('/(auth)');
  };

  return (
    <View style={styles.container}>
      <Button title="Log Out" onPress={handleLogOut} />
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
