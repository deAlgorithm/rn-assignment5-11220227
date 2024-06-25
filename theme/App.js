import React, { useState, useEffect } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { EventRegister } from 'react-native-event-listeners';
import theme from './context/theme';
import themeContext from './context/themeContext';
import Settings from './component/settings';
import Home from './component/home';
import MyCards from './component/mycards';
import Statistics from './component/statistics';

const Tab = createBottomTabNavigator();

function MyTabs() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const listener = EventRegister.on('ChangeTheme', (data) => {
            setDarkMode(data);
        });
        return () => {
            EventRegister.removeAllListeners(listener);
        };
    }, []);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Settings':
                            iconName = 'settings';
                            break;
                        case 'MyCards':
                            iconName = 'card';
                            break;
                        case 'Statistics':
                            iconName = 'pie-chart';
                            break;
                        default:
                            iconName = 'circle';
                            break;
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="MyCards" component={MyCards} />
            <Tab.Screen name="Statistics" component={Statistics} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const listener = EventRegister.on('ChangeTheme', (data) => {
            setDarkMode(data);
        });
        return () => {
            EventRegister.removeAllListeners(listener);
        };
    }, []);

    return (
        
        <themeContext.Provider value={darkMode ? theme.dark : theme.light}>
            <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
                <MyTabs />
            </NavigationContainer>
        </themeContext.Provider>
    );
}
