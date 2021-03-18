import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function ReviewDetail({ route, navigation }) {
  const review = route.params;
  const Rating = ({ rating = 0 }) => {
    const ratings = []
    for(let i = 0; i < 5; ++i) {
      ratings.push(<AntDesign key={i} name={rating > 0 ? "star" : "staro"} size={24} color="yellow" />)
      rating--
    }
    return ratings
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{review.title}</Text>
      <Text style={styles.description}>{review.description}</Text>
      <View style={styles.ratingContainer}>
        <Rating rating={review?.rating} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  title: {
    fontFamily: 'nunito-regulat',
    fontWeight: 'bold',
    fontSize: 18
  },
  ratingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'skyblue'
  }
});
