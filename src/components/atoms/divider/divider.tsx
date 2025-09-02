import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {DividerProps} from './type';

const Divider: FunctionComponent<DividerProps> = props => {
  return (
    <View style={[styles.container, props.style]}>
      {props.text ? (
        <>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>{props.text}</Text>
          <View style={styles.divider} />
        </>
      ) : (
        <View style={styles.divider} />
      )}
    </View>
  );
};

export default Divider;
