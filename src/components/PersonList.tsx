import {
  useColorScheme,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createStore} from 'redux';
import {Person, PersonReducer} from '../store/reducers/person.reducer';
import {PropsWithChildren, useEffect, useState} from 'react';
import {Provider, connect} from 'react-redux';
import {PersonItem} from './PersonItem';

export function PersonList(): JSX.Element {
  let [personList, setPersonList] = useState([] as Person[]);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const store = createStore(
    PersonReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  store.subscribe(() => {
    setPersonList(store.getState().people);
  });

  useEffect(() => {
    store.dispatch({type: 'get/people'});
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        data={personList}
        renderItem={({item}) => <PersonItem person={item} />}
      />
    </SafeAreaView>
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
});

const mapStateToProps = (state: {people: Person[]}) => {
  return {
    people: state.people,
  };
};

export default connect(mapStateToProps)(PersonList);
