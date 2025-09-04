import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Lesson } from '../types';

type LessonScreenProps = {
  navigation: StackNavigationProp<any>;
  route: RouteProp<{ params: { lesson: Lesson } }, 'params'>;
};

const LessonScreen: React.FC<LessonScreenProps> = ({ route }) => {
  const { lesson } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: lesson.image }} style={styles.image} />
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.description}>{lesson.description}</Text>
      <Text style={styles.content}>{lesson.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default LessonScreen;