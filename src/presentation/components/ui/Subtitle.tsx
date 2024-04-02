import {Text, View} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../../context/ThemeContext';
import {useContext} from 'react';
interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
}

export const Subtitle = ({text, backgroundColor, safe = false}: Props) => {
  const {top} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor: backgroundColor ? backgroundColor : colors.background,
        color: colors.text,
      }}>
      {text}
    </Text>
  );
};
