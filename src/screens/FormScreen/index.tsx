import React from 'react';
import {View, ViewStyle} from 'react-native';
import {Screen} from '../../components/Screen';
import FormValidation from '../FormScreen/Sections/FormValidation';

import {colors} from '../../theme';

export const FormScreen = () => {
  return (
    <Screen
      preset="auto"
      statusBarStyle="light-content"
      contentContainerStyle={$screenContainer}
      backgroundColor={colors.background}
      safeAreaEdges={['top', 'bottom']}>
      <View>
        <FormValidation />
      </View>
    </Screen>
  );
};

const $screenContainer: ViewStyle = {
  display: 'flex',
  height: '100%',
};

export default FormScreen;
