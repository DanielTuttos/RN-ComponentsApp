import prompt from 'react-native-prompt-android';
import {Alert, View} from 'react-native';
import {Button, CustomView, Title} from '../../components';
import {globalStyles} from '../../../config/theme/theme';
import {showPromptAdapter} from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {
  const createTwoButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const createThreeButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const showPrompt = () => {
    showPromptAdapter({
      title: 'Hola que tal',
      subTitle: 'una legenda bien perra',
      buttons: [
        {
          text: 'Ok',
          onPress: () => {},
          style: 'default',
        },
        {
          text: 'cancel',
          onPress: () => {},
          style: 'destructive',
        },
      ],
      placeholder: 'Hola que tal'
    });

    // codigo nativo
    // Alert.prompt(
    //   'cual es tu correo electronico',
    //   'hkdahskfjh sdkfjhaskdhfwefiu asdfhasdk',
    //   (value: string) => console.log('value: ', value),
    //   'secure-text',
    //   'valor por defecto',
    //   'number-pad'
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="Alertas" safe />
      <Button text="Alert - 2 botones" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Alert - 3 botones" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Prompt" onPress={showPrompt} />
    </CustomView>
  );
};
