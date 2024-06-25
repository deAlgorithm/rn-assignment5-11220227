import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Setting from '../component/settingsscreen';
import themeContext from '../context/themeContext';
export default function Settings() {
    const theme = useContext(themeContext)
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.Settings}>
            <Text style={[styles.Head,{color : theme.color}]}>Settings</Text>
        </View>
      <TouchableOpacity style={styles.option} >
        <Text style={[styles.optionText,{color : theme.color}]}>Language</Text>
            <Text style={[styles.greaterthan,{color : theme.color}]}>{'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} >
        <Text style={[styles.optionText,{color : theme.color}]}>My Profile</Text>
        <Text style={[styles.greaterthan,{color : theme.color}]}>{'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} >
        <Text style={[styles.optionText,{color : theme.color}]}>Contact Us</Text>
        <Text style={[styles.greaterthan,{color : theme.color}]}>{'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} >
        <Text style={[styles.optionText,{color : theme.color}]}>Change Password</Text>
        <Text style={[styles.greaterthan,{color : theme.color}]}>{'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} >
        <Text style={[styles.optionText,{color : theme.color}]}>Privacy Policy</Text>
        <Text style={[styles.greaterthan,{color : theme.color}]}>{'>'}</Text>
      </TouchableOpacity>
      <Setting />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 40,
        
    },
    Head:{
        fontSize: 26,
    },
    Settings: {
       
        marginBottom: 80,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 20,
        marginBottom : -8,
    },
    greaterthan:{
        fontSize:25,
    }});