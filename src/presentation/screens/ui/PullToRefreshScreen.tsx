import {RefreshControl, ScrollView} from 'react-native';
import {Title} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useContext, useState} from 'react';
import {colors, globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };
  return (
    <ScrollView
      style={[
        globalStyles.mainContainer,
        globalStyles.globalMargin,
        {backgroundColor: colors.background},
      ]}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          onRefresh={onRefresh}
          colors={[colors.primary, 'red', 'orange', 'green']}
        />
      }>
      {/* <CustomView margin> */}
      <Title text="Pull To Refresh" safe />
      {/* </CustomView> */}
    </ScrollView>
  );
};
