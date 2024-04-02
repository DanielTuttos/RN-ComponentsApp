import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from '../../../config/theme/theme';
import {useAnimation} from '../../hooks/useAnimation';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const Animation101Screen = () => {
  const {
    fadeIn,
    fadeOut,
    animatedOpacity,
    animatedTop,
    startMovingTopPosition,
  } = useAnimation();
  const {colors} = useContext(ThemeContext);

  return (
    <View style={[styles.container,{backgroundColor: colors.background}]}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            backgroundColor: colors.primary,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}
      />
      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.bounce,
            duration: 700,
          });
        }}
        style={{marginTop: 10}}>
        <Text style={{color: colors.text}}>fadeIn</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut({})} style={{marginTop: 10}}>
        <Text style={{color: colors.text}}>fadeOut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    // backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
