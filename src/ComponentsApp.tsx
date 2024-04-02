import 'react-native-gesture-handler';
import {Navigator} from './presentation/navigator/Navigator';
import {ThemeProvider} from './presentation/context/ThemeContext';

// const AppNavigation = ({children}: PropsWithChildren) => {
//   const {isDark} = useContext(ThemeContext);
//   return (
//     <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
//       {children}
//     </NavigationContainer>
//   );
// };

// const AppTheme = ({children}: PropsWithChildren) => {
//   return (
//     <ThemeProvider>
//       <AppNavigation>{children}</AppNavigation>
//     </ThemeProvider>
//   );
// };

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};
