import colors from '@/src/helpers/color';
import {flexBox} from '@/src/helpers/styleHelper';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '60%',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  textInput: {
    fontSize: 16,
  },
  input: {
    height: 60,
    width: '90%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.grey400,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 8,
    gap: 8,
  },
  button: {
    ...flexBox('row', 'center', 'center'),
    marginTop: 16,
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: colors.blue500,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dividerContainer: {
    marginVertical: 16,
  } as any,
  divider: {
    height: 1,
    backgroundColor: colors.grey400,
    marginVertical: 16,
    alignSelf: 'center',
    flex: 1,
  },
  dividerText: {
    marginHorizontal: 8,
    color: colors.grey400,
    fontSize: 14,
  },
  google: {
    height: 32,
    width: 32,
  },
});
