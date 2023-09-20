import {
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Person} from '../store/reducers/person.reducer';
import {useEffect} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {PersonItem} from './PersonItem';
import { getPeople, selectPerson } from '../store/actions/person.action';

function PersonList({navigation}: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const dispatch = useDispatch();
  const personList = useSelector((state: {people: Person[]}) => state.people);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  const navigateToDetail = (person: Person) => {
    dispatch(selectPerson(person));
    navigation.navigate('Detail');
  };

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
        renderItem={({item}) => (
          <PersonItem person={item} navigation={navigateToDetail} />
        )}
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

export default connect(mapStateToProps, {getPeople})(PersonList);
