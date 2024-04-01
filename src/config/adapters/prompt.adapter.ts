import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subTitle?: string;
  buttons: PromptButtom[];
  promptType?: 'default' | 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}
interface PromptButtom {
  text: string;
  onPress: () => void;
  style?: 'cancel' | 'default' | 'destructive';
}

export const showPromptAdapter = ({
  title,
  subTitle,
  buttons,
  promptType = 'plain-text',
  placeholder,
  defaultValue,
}: Options) => {
  prompt(title, subTitle, buttons, {
    type: promptType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
};
