import React,{useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import themeContext from '../context/themeContext';
const State = () => {
  const theme = useContext(themeContext)
  return (
    <View style={styles.container}>
        
        <TouchableOpacity style={styles.item}>
            <View style={styles.circle}>
                <Icon name="arrow-upward" size={30} color="#333" />
            </View>
            <Text style={styles.label}>Sent</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.item}>
            <View style={styles.circle}>
                <Icon name="arrow-downward" size={30} color="#333" />
            </View>
            <Text style={styles.label}>Receive</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.item}>
            <View style={styles.circle}>
                <Icon name="attach-money" size={30} color="#333" />
            </View>
            <Text style={styles.label}>Loan</Text>
        </TouchableOpacity>

    
        <TouchableOpacity style={styles.item}>
            <View style={styles.circle}>
                <Icon name="cloud-upload" size={30} color="#333" />
            </View>
            <Text style={styles.label}>Topup</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  item: {
    alignItems: 'center',
    gap: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
});

export default State;
