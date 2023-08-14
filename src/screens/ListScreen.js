/*
FlatList is a core component designed to render large lists of data efficiently by only rendering the items that fit on-screen. This method of rendering is called "windowing" and significantly improves performance for long lists because off-screen items aren't being processed or rendered, saving both CPU and memory.
*/

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 45 },
        { name: 'Friend #3', age: 32 },
        { name: 'Friend #4', age: 27 },
        { name: 'Friend #5', age: 53 },
        { name: 'Friend #6', age: 40 },
        { name: 'Friend #7', age: 30 },
        { name: 'Friend #8', age: 36 },
        { name: 'Friend #9', age: 60 },
    ];

    return (
        <FlatList
        // displays content horizontal with scrollbar
            /* horizontal */
        // disables scrollbar
        /*  showsHorizontalScrollIndicator={false} */
            // With Flatlist data prop and a unique id are required
            // Here the keyExtractor provides id from name-string,
            // which is for each friend name unique
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <Text style={styles.textStyle}>
                    {item.name}  - Age  {item.age}
                    </Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        // Ads space above and below item in the list
        marginVertical: 50
    }
});

export default ListScreen;
