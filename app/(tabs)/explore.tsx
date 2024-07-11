import React, {useCallback, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserCard from "@/app/UserCard";
import {useFocusEffect} from "expo-router";

const TabTwoScreen = () => {
    const [selectedData, setSelectedData] = useState({});


    useFocusEffect(
        useCallback(() => {
            console.log('Screen is focused',window.selectedData);
            if(window?.selectedData){
                setSelectedData(window.selectedData)
            }
            return () => {
                console.log('Screen is unfocused');
            };
        }, [])
    );

  return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
          <UserCard data={selectedData} />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});

export default TabTwoScreen;
