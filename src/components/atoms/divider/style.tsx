import colors from '@/src/helpers/color';
import {flexBox} from '@/src/helpers/styleHelper';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...flexBox('row', 'center', 'center'),
  },
  divider: {
    height: 1,
    backgroundColor: colors.grey400,
    alignSelf: 'center',
    flex: 1,
  },
  dividerText: {
    marginHorizontal: 8,
    color: colors.grey400,
    fontSize: 15,
  },
});
export default styles;
