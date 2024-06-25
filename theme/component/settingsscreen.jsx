
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../context/themeContext';

const Setting = () => {
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState(false);

    return (
        <View style={styles.themecontainer}>
            <Text style={[styles.theme, { color: theme.color }]}>Theme</Text>
            <Switch
                value={darkMode}
                style={[styles.switch, { transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }]}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => {
                    setDarkMode(value);
                    EventRegister.emit('ChangeTheme', value);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    themecontainer: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: 'row',
    },
    theme: {
        fontSize: 24,
        marginBottom: 20,
    },
   
});

export default Setting;
