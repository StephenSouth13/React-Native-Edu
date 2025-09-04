import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface LessonCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default LessonCard;