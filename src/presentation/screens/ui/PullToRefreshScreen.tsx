import {RefreshControl, ScrollView} from 'react-native';
import {Title} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useState} from 'react';
import {colors, globalStyles} from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };
  return (
    <ScrollView
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}
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
