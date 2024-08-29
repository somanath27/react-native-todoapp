import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ImageProps,
  Text,
} from 'react-native';

import Pagination from '../../../components/Pagination';
import {colors} from '../../../theme/index';

const windowWidth = Dimensions.get('window').width;

type ItemProps = {
  image: ImageProps;
  id: number;
  title: string;
  description: string;
};

const Item = ({image, id, description, title}: ItemProps) => {
  return (
    <View key={id} style={styles.wrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={image} />
      </View>
    </View>
  );
};

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderData = [
    {
      id: 1,
      url: require('../../../assets/images/logo/slider1.png'),
      title: 'Create a To-Do List',
      description:
        'Start by organizing your tasks for the day by creating a to-do list.',
    },
    {
      id: 2,
      url: require('../../../assets/images/logo/slider2.png'),
      title: 'Prioritize Tasks',
      description:
        'Review your tasks and identify the most important ones to tackle first.',
    },
    {
      id: 3,
      url: require('../../../assets/images/logo/slider3.png'),
      title: 'Complete the First Task',
      description:
        'Focus on completing the first task on your list to build momentum.',
    },
  ];

  const onViewableItemsChanged = ({changed}: any) => {
    setActiveIndex(changed[0].index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={sliderData}
        renderItem={({item}: any) => (
          <Item
            image={item.url}
            id={item.id}
            description={item.description}
            title={item.title}
          />
        )}
        keyExtractor={(item: any) => item.id}
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
      <Pagination data={sliderData} active={activeIndex} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    height: 600,
    width: 'auto',
    alignItems: 'center',
    position: 'relative',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  textWrapper: {
    width: windowWidth - 40,
    paddingLeft: 10,
    gap: 50,
  },
  titleText: {
    color: colors.textDark,
    fontSize: 24,
    fontWeight: '400',
  },
  text: {
    color: colors.textMedium,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    borderRadius: 36,
    width: 400,
    height: 350,
    alignSelf: 'center',
  },
});
