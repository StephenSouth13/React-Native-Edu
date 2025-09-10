import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import LessonCard from '../components/LessonCard';
import { Lesson } from '../types';

const lessons: Lesson[] = [
    {
        id: '1',
        title: 'Introduction to React Native',
        description: 'Learn the basics of React Native and how to build mobile applications.',
        image: 'https://example.com/image1.png',
    },
    {
        id: '2',
        title: 'Advanced React Native',
        description: 'Dive deeper into React Native and explore advanced concepts.',
        image: 'https://example.com/image2.png',
    },
    {
        id: '3',
        title: 'React Native Navigation',
        description: 'Understand how to implement navigation in your React Native apps.',
        image: 'https://example.com/image3.png',
    },
    {
        id: '4',
        title: 'How to use React Native',
        description: 'Learn how to effectively use React Native for your mobile app development.',
        image: 'https://example.com/image4.png',
    },
];

const HomeScreen: React.FC = () => {
    const renderItem = ({ item }: { item: Lesson }) => (
        <LessonCard lesson={item} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={lessons}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
});

export default HomeScreen;