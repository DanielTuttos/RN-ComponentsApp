import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ReactNode, useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView = ({style, children, margin}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View
      style={[
        globalStyles.mainContainer,
        {backgroundColor: colors.background},
        style,
        margin && globalStyles.globalMargin,
      ]}>
      {children}
    </View>
  );
};
