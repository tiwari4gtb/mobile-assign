import React from 'react';
import {View, Text, ActivityIndicator, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import useApiCall from '../useApiCall';
import {useNavigation} from "@react-navigation/core";

const Home = ()  => {
    const navigation = useNavigation();

    let data = [{
        "employee_age": 61,
        "employee_name": "Tiger Nixon",
        "employee_salary": 320800,
        "id": 1,
        "profile_image": ""
    }, {
        "employee_age": 63,
        "employee_name": "Garrett Winters",
        "employee_salary": 170750,
        "id": 2,
        "profile_image": ""
    }, {
        "employee_age": 66,
        "employee_name": "Ashton Cox",
        "employee_salary": 86000,
        "id": 3,
        "profile_image": ""
    }, {
        "employee_age": 22,
        "employee_name": "Cedric Kelly",
        "employee_salary": 433060,
        "id": 4,
        "profile_image": ""
    }, {
        "employee_age": 33,
        "employee_name": "Airi Satou",
        "employee_salary": 162700,
        "id": 5,
        "profile_image": ""
    }, {
        "employee_age": 61,
        "employee_name": "Brielle Williamson",
        "employee_salary": 372000,
        "id": 6,
        "profile_image": ""
    }, {
        "employee_age": 59,
        "employee_name": "Herrod Chandler",
        "employee_salary": 137500,
        "id": 7,
        "profile_image": ""
    }, {
        "employee_age": 55,
        "employee_name": "Rhona Davidson",
        "employee_salary": 327900,
        "id": 8,
        "profile_image": ""
    }, {
        "employee_age": 39,
        "employee_name": "Colleen Hurst",
        "employee_salary": 205500,
        "id": 9,
        "profile_image": ""
    }, {
        "employee_age": 23,
        "employee_name": "Sonya Frost",
        "employee_salary": 103600,
        "id": 10,
        "profile_image": ""
    }, {
        "employee_age": 30,
        "employee_name": "Jena Gaines",
        "employee_salary": 90560,
        "id": 11,
        "profile_image": ""
    }, {
        "employee_age": 22,
        "employee_name": "Quinn Flynn",
        "employee_salary": 342000,
        "id": 12,
        "profile_image": ""
    }, {
        "employee_age": 36,
        "employee_name": "Charde Marshall",
        "employee_salary": 470600,
        "id": 13,
        "profile_image": ""
    }, {
        "employee_age": 43,
        "employee_name": "Haley Kennedy",
        "employee_salary": 313500,
        "id": 14,
        "profile_image": ""
    }, {
        "employee_age": 19,
        "employee_name": "Tatyana Fitzpatrick",
        "employee_salary": 385750,
        "id": 15,
        "profile_image": ""
    }, {
        "employee_age": 66,
        "employee_name": "Michael Silva",
        "employee_salary": 198500,
        "id": 16,
        "profile_image": ""
    }, {
        "employee_age": 64,
        "employee_name": "Paul Byrd",
        "employee_salary": 725000,
        "id": 17,
        "profile_image": ""
    }, {
        "employee_age": 59,
        "employee_name": "Gloria Little",
        "employee_salary": 237500,
        "id": 18,
        "profile_image": ""
    }, {
        "employee_age": 41,
        "employee_name": "Bradley Greer",
        "employee_salary": 132000,
        "id": 19,
        "profile_image": ""
    }, {
        "employee_age": 35,
        "employee_name": "Dai Rios",
        "employee_salary": 217500,
        "id": 20,
        "profile_image": ""
    }, {
        "employee_age": 30,
        "employee_name": "Jenette Caldwell",
        "employee_salary": 345000,
        "id": 21,
        "profile_image": ""
    }, {
        "employee_age": 40,
        "employee_name": "Yuri Berry",
        "employee_salary": 675000,
        "id": 22,
        "profile_image": ""
    }, {
        "employee_age": 21,
        "employee_name": "Caesar Vance",
        "employee_salary": 106450,
        "id": 23,
        "profile_image": ""
    }, {"employee_age": 23, "employee_name": "Doris Wilder", "employee_salary": 85600, "id": 24, "profile_image": ""}];

    // const { data, loading, error } = useApiCall('https://dummy.restapiexample.com/api/v1/employees');

    // {"employee_age": 35, "employee_name": "Dai Rios", "employee_salary": 217500, "id": 20, "profile_image": ""}
    console.log(data, 'data###');
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={()=>{
            window.selectedData =item;
            navigation.navigate('explore')
        }}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>Name- {item.employee_name}</Text>
            </View>
        </TouchableOpacity>
    );

    // if (loading) {
    //     return <ActivityIndicator size="large" color="#0000ff" />;
    // }
    //
    // if (error) {
    //     return (
    //         <View style={styles.container}>
    //             <Text style={styles.errorText}>Error: {error}</Text>
    //         </View>
    //     );
    // }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    itemContainer: {
        height: 90,
        padding: 10,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#d7c3c3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    },
});

export default Home;
