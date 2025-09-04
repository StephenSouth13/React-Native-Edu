import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileScreen = () => {
    const userProfile = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'A passionate learner and educator.',
    };

    const handleEditProfile = () => {
        // Logic to edit profile goes here
        alert('Edit Profile button pressed');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.info}>{userProfile.name}</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.info}>{userProfile.email}</Text>
            <Text style={styles.label}>Bio:</Text>
            <Text style={styles.info}>{userProfile.bio}</Text>
            <Button title="Edit Profile" onPress={handleEditProfile} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginTop: 10,
    },
    info: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default ProfileScreen;