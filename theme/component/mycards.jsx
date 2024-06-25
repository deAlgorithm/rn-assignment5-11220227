import React, {  useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import themeContext from '../context/themeContext';

const MyCards = () => {
    const theme = useContext(themeContext);
   

    return (
        <View style={[styles.container, { backgroundColor: theme.background }, { color: theme.color }]}>
            <Text style={[styles.title, { color: theme.color }]}>Cards</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default MyCards;
