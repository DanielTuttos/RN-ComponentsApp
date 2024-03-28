import {useState} from 'react';
import {Card, CustomSwitch, CustomView, Separator} from '../../components';

export const SwitchScreen = () => {
  //   const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [state, setState] = useState({
    isAcive: true,
    isHungry: false,
    isHappy: true,
  });
  return (
    <CustomView style={{marginTop: 100, paddingHorizontal: 10}}>
      <Card>
        <CustomSwitch
          isOn={state.isAcive}
          onChange={value => setState({...state, isAcive: value})}
          text="Activo"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => setState({...state, isHungry: value})}
          text="Tiene hambre"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => setState({...state, isHappy: value})}
          text="Es feliz"
        />
      </Card>
    </CustomView>
  );
};
