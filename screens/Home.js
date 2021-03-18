import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export default function Home({ navigation }) {
  const reviews = [
    { title: 'movie 1', rating: 5, description: 'description', key: 1 },
    { title: 'movie 2', rating: 2, description: 'description', key: 2 },
    { title: 'movie 3', rating: 5, description: 'description', key: 3 },
    { title: 'movie 4', rating: 1, description: 'description', key: 4 },
    { title: 'movie 5', rating: 4, description: 'description', key: 5 },
  ]

  const renderReview = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewTitle}>{item?.title}</Text>
          <Feather name="eye" size={24} color="skyblue" onPress={() => navigation.navigate('ReviewDetail', item)} />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={item => item?.key?.toString()}
        renderItem={renderReview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  text: {
    fontFamily: 'nunito-regular',
    fontSize: 18,
    color: 'skyblue'
  },
  reviewContainer: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderColor: 'skyblue',
    borderStyle: 'dashed',
    borderRadius: 5,
    marginVertical: 10
  },
  reviewTitle: {
    color: 'skyblue'
  }
});
