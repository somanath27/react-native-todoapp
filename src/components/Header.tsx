import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../theme';

import {navigate} from '../navigators';

interface HeaderProps {
  title: string;
  imageUrl: string;
}
const Header = ({title, imageUrl}: HeaderProps) => {
  const handleNavigation = (page: string) => {
    navigate(page);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity
        style={{alignItems: 'flex-end'}}
        onPress={() => handleNavigation('FormScreen')}>
        <Image
          source={{
            uri: 'https://www.gstatic.com/images/branding/product/1x/forms_512dp.png',
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#DF5286',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Header;
