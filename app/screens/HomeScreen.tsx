/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ViewStyle,
  SafeAreaView,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import {getImage} from '../assets/images';
import {Header, MovieCard} from '../components';
import {pageContentOne, pageContentTwo, pageContentThree} from '../data';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

type movieType = {
  name: string;
  ['poster-image']: string;
};

const HomeScreen = () => {
  const [movieList, setMovieList] = useState<movieType[]>(
    pageContentOne.page['content-items'].content,
  );
  const [filteredList, setFilteredList] = useState<movieType[]>(movieList);
  const [pageCount, setPageCount] = useState<number>(1);

  useEffect(() => {
    mergeData();
  }, [pageCount]);

  const updatePageCount = () => {
    if (pageCount < 3) {
      setPageCount(pageCount + 1);
    }
  };

  const mergeData = () => {
    if (pageCount === 2) {
      const addNewData = [
        ...movieList,
        ...pageContentTwo.page['content-items'].content,
      ];
      setMovieList(addNewData);
      setFilteredList(addNewData);
    }
    if (pageCount === 3) {
      const addNewData = [
        ...movieList,
        ...pageContentThree.page['content-items'].content,
      ];
      setMovieList(addNewData);
      setFilteredList(addNewData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={pageContentOne.page.title}
        originalData={movieList}
        data={filteredList}
        setData={setFilteredList}
      />
      <FlatList
        data={filteredList}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <MovieCard
              key={index}
              image={getImage(item['poster-image'])}
              movieName={item.name}
            />
          );
        }}
        onEndReached={updatePageCount}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

interface StyleProps {
  container: ViewStyle;
  columnWrapperStyle: ViewStyle;
  contentContainerStyle: ViewStyle;
}

const styles = StyleSheet.create<StyleProps>({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  columnWrapperStyle: {gap: WIDTH * 0.012},
  contentContainerStyle: {
    padding: 10,
    gap: HEIGHT * 0.03,
    zIndex: 1,
    marginTop: Platform.OS === 'ios' ? HEIGHT * 0.07 : HEIGHT * 0.1,
    paddingBottom: Platform.OS === 'ios' ? HEIGHT * 0.07 : HEIGHT * 0.1,
  },
});

export default HomeScreen;
