import {PropsWithChildren} from 'react';
import {
  useColorScheme,
  View,
  Text,
  StyleSheet,
  Image,
  ViewStyle,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Person} from '../store/reducers/person.reducer';
import {getTheme} from 'react-native-material-kit';
import Ionicons from 'react-native-vector-icons/Ionicons';

type SectionProps = PropsWithChildren<{
  person: Person;
}>;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    top: 20,
    left: 80,
  },
  sectionDescription: {
    marginTop: 1,
    fontSize: 14,
    fontWeight: '400',
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  image: {
    height: 100,
  },
});

export function PersonItem({person}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = getTheme();
  return (
    <View
      style={[
        theme.cardStyle as StyleProp<ViewStyle>,
        styles.sectionContainer,
      ]}>
      <Image
        source={require('../assets/img/background.jpg')}
        style={[theme.cardImageStyle as StyleProp<ImageStyle>, styles.image]}
      />
      <Ionicons name="person" size={100} style={styles.icon} />
      <Text
        style={[
          theme.cardTitleStyle as StyleProp<ViewStyle>,
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Name: {person.name}
      </Text>
      <Text
        style={[
          theme.cardContentStyle as StyleProp<ViewStyle>,
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        Height: {person.height} cm
      </Text>
      <Text
        style={[
          theme.cardContentStyle as StyleProp<ViewStyle>,
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        Hair Color: {person.hair_color}
      </Text>
    </View>
  );
}
