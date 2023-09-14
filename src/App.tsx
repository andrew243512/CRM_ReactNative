import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddPerson} from './components/AddPerson';
import {CompanyList} from './components/CompanyList';
import {PersonList} from './components/PersonList';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PersonReducer} from './store/reducers/person.reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  const store = createStore(
    PersonReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="PersonList"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName = '';

              if (route.name === 'PersonList') {
                iconName = focused
                  ? 'information-circle'
                  : 'information-circle-outline';
              } else if (route.name === 'AddPerson') {
                iconName = focused ? 'add' : 'add';
              } else if (route.name === 'CompanyList') {
                iconName = focused ? 'wine' : 'wine-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            name="PersonList"
            component={PersonList}
            options={{tabBarBadge: 2, title: 'Person List'}}
          />
          <Tab.Screen
            name="AddPerson"
            component={AddPerson}
            options={{
              tabBarLabel: 'Add Person',
            }}
          />
          <Tab.Screen
            name="CompanyList"
            component={CompanyList}
            options={{
              tabBarShowLabel: true,
              tabBarLabel: 'Company List',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
