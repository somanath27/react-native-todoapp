import React, {FC} from 'react';
import {
  View,
  ViewStyle,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import {observer} from 'mobx-react-lite';

import {AppStackScreenProps, navigate} from '../../navigators/index';
import {colors} from '../../theme/index';
import {Screen} from '../../components/Screen';
import Slider from './Sections/Slider';

interface LandingScreenProps extends AppStackScreenProps<'LandingScreen'> {}

export const LandingScreen: FC<LandingScreenProps> = observer(
  function LandingScreen(_props: any) {
    const handleNavigation = (page: string) => {
      navigate(page);
    };

    return (
      <Screen
        preset="auto"
        statusBarStyle="light-content"
        contentContainerStyle={$screenContainer}
        backgroundColor={colors.background}
        safeAreaEdges={['top', 'bottom']}>
        <View style={$sliderContainer}>
          <Slider />
        </View>
        <View style={$cardContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNavigation('Home')}
            testID="login-button">
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </Screen>
    );
  },
);

const $screenContainer: ViewStyle = {
  display: 'flex',
  height: '100%',
};

const $sliderContainer: ViewStyle = {
  flex: 1,
  paddingHorizontal: 28,
  paddingTop: 60,
  paddingBottom: 20,
  backgroundColor: colors.background,
};

const $cardContainer: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexShrink: 0,
  paddingTop: 20,
  paddingBottom: 40,
  paddingHorizontal: 20,
  backgroundColor: colors.pureWhite,
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  justifyContent: 'space-around',
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});
