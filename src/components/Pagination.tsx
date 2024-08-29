import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';
import {generateKey} from '../utils/generateKey';

const Pagination = ({data, active}: any) => {
  return (
    <View style={styles.container}>
      {data.map((_: any, idx: number) => (
        <View
          key={generateKey()}
          style={active === idx ? styles.activeDot : styles.dot}
        />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  activeDot: {
    width: 40,
    height: 3,
    borderRadius: 60,
    backgroundColor: colors.primary,
    marginHorizontal: 3,
  },
  dot: {
    width: 40,
    height: 3,
    borderRadius: 60,
    backgroundColor: colors.border,
    marginHorizontal: 3,
  },
});
