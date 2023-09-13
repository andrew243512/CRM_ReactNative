import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddPerson} from './components/AddPerson';
import {PersonList} from './components/PersonList';
import {CompanyList} from './components/CompanyList';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='PersonList'>
        <Tab.Screen name="PersonList" component={PersonList} />
        <Tab.Screen name="AddPerson" component={AddPerson} />
        <Tab.Screen name="CompanyList" component={CompanyList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
