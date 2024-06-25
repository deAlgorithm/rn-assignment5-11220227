import React, { useContext } from 'react';
import { View,Image, Text, StyleSheet } from 'react-native';
import themeContext from '../context/themeContext';
const ListOfTransactions = ({ transactionData }) => {
  const theme = useContext(themeContext)
  return (
    <View contentContainerStyle={styles.container}>
      {transactionData.map((transaction, index) => (
        <View key={index} style={styles.transactionItem}>
         
          <View style={[styles.iconBackground]}  backgroundColor={'gray'}>
          <Image source={transaction.image} style={styles.iconContainer}  backgroundColor={'gray'}/>
          </View>

    
          <View style={styles.detailsContainer}>
            <Text style={[styles.transactionWhere,{color:theme.color}]}>{transaction.where}</Text>
            <Text style={styles.transactionType}>{transaction.type}</Text>
          </View>

          
          <View style={styles.amountContainer}>
          <Text 
              style={[styles.amount,{color: transaction.amount < 0 ? 'red' : 'green'}]}
          >
                {transaction.amount < 0 ? '-' : '+'} ${Math.abs(transaction.amount)}
              </Text>
          </View>

        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  iconBackground: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  transactionWhere: {
    fontSize: 16,
    marginBottom: 5,
  },
  transactionType: {
    fontSize: 14,
    color: 'gray',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ListOfTransactions;
