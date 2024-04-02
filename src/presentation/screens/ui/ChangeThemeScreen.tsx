import {Text, View} from 'react-native';
import {Button, CustomView} from '../../components';
import {Title} from '../../components/ui/Title';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);
  return (
    <CustomView margin>
      <Title text={`Cambiar Tema: ${currentTheme}`} safe />
      <Button text="Tema Light" onPress={() => setTheme('light')} />
      <View style={{height: 20}} />
      <Button text="Tema Dark" onPress={() => setTheme('dark')} />

      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};
