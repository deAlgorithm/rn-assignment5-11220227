import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Avatar from "./avatar";
import State from "./state";
import ListOfTransactions from "./transaction";
import transactionData from "./list";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import themeContext from "../context/themeContext";

const Home = () => {
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[styles.body, { backgroundColor: theme.background }]}>
            <ScrollView>
                <View style={[styles.container, { backgroundColor: theme.background }]}>
                <Avatar
                    name="OTABIL ISHAQUE"
                    message="Welcome back,"
                    avatar="https://media.licdn.com/dms/image/D4D03AQHV4e812MZtUA/profile-displayphoto-shrink_100_100/0/1718264970727?e=1724284800&v=beta&t=0MgQzxtmqnnkrO0FCMWZkfQVkJPPnGfcoWyaf8vRvLU"
                />
                
                <Image
                    source={require("../assets/Card.png")}
                    style={styles.image}
                />
                <State />
                <View style={styles.title}>
                    <Text style={[styles.transaction,{color : theme.color}]}>Transaction</Text>
                    <Text style={styles.seeAll}>See All</Text>
                </View>
            </View>
            <ListOfTransactions transactionData={transactionData} />
            </ScrollView>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        marginTop: 20,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        gap:200,
    },
    transaction: {
        color: "#333",
        fontSize: 20,
    },
    seeAll: {
        color: "#007AFF",
        fontSize: 16,
    },
    image: {
        width: 370,
        height: 220,
        resizeMode: "cover",
    },
});

export default Home;
