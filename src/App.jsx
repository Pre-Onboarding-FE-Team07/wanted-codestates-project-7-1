import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import IssueScreen from './screens/Issue';
import MyRepoScreen from './screens/MyRepo';
import SearchScreen from './screens/Search';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tabs.Navigator>
          <Tabs.Screen name="Search" component={SearchScreen} />
          <Tabs.Screen name="Issue" component={IssueScreen} />
          <Tabs.Screen name="MyRepo" component={MyRepoScreen} />
        </Tabs.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
