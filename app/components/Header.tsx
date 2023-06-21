/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  Image,
  ImageStyle,
  Text,
  TextStyle,
  Dimensions,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../styles';

type movieType = {
  name: string;
  ['poster-image']: string;
};

interface HeaderProps {
  title: string;
  originalData?: movieType[];
  data?: movieType[];
  setData?: (data: movieType[]) => void;
}

const HEIGHT = Dimensions.get('screen').height;

const Header: React.FC<HeaderProps> = ({title, setData, originalData}) => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    handleSearch();
  }, [inputValue]);

  const handleSearch = () => {
    if (inputValue.length) {
      const newData = [...originalData].filter(item =>
        item.name.toLowerCase().includes(inputValue.toLowerCase()),
      );
      setData(newData);
    } else {
      setData(originalData);
    }
  };

  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.75)', 'rgba(0, 0, 0, 0)']}
      angle={180}
      useAngle
      locations={[0.7, 0.85, 1]}
      style={styles.container}>
      {isSearch ? (
        <>
          <View style={styles.titleContainer}>
            <TextInput
              placeholder="Search..."
              placeholderTextColor={'gray'}
              style={styles.input}
              value={inputValue}
              onChangeText={text => setInputValue(text)}
            />
          </View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setIsSearch(false);
              setData(originalData);
              setInputValue('');
            }}>
            <Image
              source={require('../assets/images/Close.png')}
              style={styles.closeImage}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.titleContainer}>
            <Image
              source={require('../assets/images/Back.png')}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <TouchableOpacity activeOpacity={1} onPress={() => setIsSearch(true)}>
            <Image
              source={require('../assets/images/search.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </>
      )}
    </LinearGradient>
  );
};

interface StyleProps {
  container: ViewStyle;
  image: ImageStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
  input: ViewStyle;
  closeImage: ImageStyle;
}

const styles = StyleSheet.create<StyleProps>({
  container: {
    height: HEIGHT * 0.1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    zIndex: 999,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 30 : 0,
    right: 0,
    left: 0,
  },
  image: {
    width: 20,
    height: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: Fonts.TitilliumWebRegular,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    width: '85%',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  closeImage: {width: 35, height: 35},
});

export default Header;
