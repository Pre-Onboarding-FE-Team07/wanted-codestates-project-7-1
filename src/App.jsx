import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import TabIcon from './components/TabIcon';
import IssueScreen from './screens/Issue';
import MyRepoScreen from './screens/MyRepo';
import SearchScreen from './screens/Search';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tabs.Navigator
          // initialRouteName="Issue"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Tabs.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: (props) => <TabIcon name="repo" {...props} />,
            }}
          />
          <Tabs.Screen
            name="Issue"
            component={IssueScreen}
            options={{
              tabBarIcon: (props) => <TabIcon name="issue-opened" {...props} />,
            }}
          />
          <Tabs.Screen
            name="MyRepo"
            component={MyRepoScreen}
            options={{
              tabBarIcon: (props) => <TabIcon name="heart" {...props} />,
            }}
          />
        </Tabs.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
