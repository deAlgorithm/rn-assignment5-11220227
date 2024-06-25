import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon component from react-native-vector-icons
import themeContext from '../context/themeContext';
const Avatar = ({ name, message, avatar }) => {
  const theme = useContext(themeContext)
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image source={{ uri: avatar }} style={styles.avatar}/>
        <View>
            <Text style={[styles.message]}>{message}</Text>
            <Text style={[styles.name,{color: theme.color}]}>{name}</Text>
        </View>
        
      </View>
      <View style={styles.searchIconCont}>
        <Icon name="search" size={25} color="#666" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    marginLeft: 10,
  },
  message: {
    color: 'gray',
    fontSize: 18,
    marginLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
    searchIconCont: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#f2f2f2',
    },

});

export default Avatar;
