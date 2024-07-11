import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserCard = ({data:{ profile_image,employee_name ,employee_age,employee_salary,id}}) => {
    return (
        <View style={styles.card}>
            <Image
                style={styles.profileImage}
                source={{ uri: profile_image || `https://randomuser.me/api/portraits/med/men/${id}.jpg` }}
            />
            <Text style={styles.name}>{employee_name}</Text>
            <Text style={styles.info}>Age: {employee_age}</Text>
            <Text style={styles.info}>Salary: ${employee_salary?.toLocaleString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '90%',
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    info: {
        fontSize: 18,
        color: '#666',
    },
});

export default UserCard;
