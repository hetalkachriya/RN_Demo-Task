import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextStyle,
  Dimensions,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {Fonts} from '../styles';

interface MovieCardProps {
  image: ImageSourcePropType;
  movieName: string;
}

const MovieCard: React.FC<MovieCardProps> = ({image, movieName}) => {
  return (
    <View style={styles.container}>
      <Image
        source={
          image
            ? image
            : require('../assets/images/placeholderForMissingImage.png')
        }
        style={styles.imageStyle}
      />
      <Text style={styles.title}>{movieName}</Text>
    </View>
  );
};

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

interface StyleProps {
  container: ViewStyle;
  title: TextStyle;
  imageStyle: ImageStyle;
}

const styles = StyleSheet.create<StyleProps>({
  container: {
    width: WIDTH * 0.32,
  },
  imageStyle: {width: WIDTH * 0.28, height: HEIGHT * 0.2},
  title: {
    color: 'white',
    fontSize: 15,
    fontFamily: Fonts.TitilliumWebLight,
    paddingVertical: 5,
  },
});

export default MovieCard;
