"# rn-assignment5-11220227" 
# React Native Theme Application

This application is built using React Native with Expo, showcasing a settings screen that includes a theme toggle switch, allowing users to switch between light and dark modes. The app also features a bottom tab navigation structure with screens for Home, MyCards, Statistics, and Settings.

## Features

- **Bottom Tab Navigation:** Navigate between Home, MyCards, Statistics, and Settings screens.
- **Theme Toggle:** Switch between light and dark modes.
- **Settings Screen:** Access various settings including theme toggle.

## Screenshots
![Darkmode Homescreen](<theme/assets/Screenshot_20240625_181125_Expo Go.jpg>) 

![Lightmode HHomescreen](<theme/assets/Screenshot_20240625_181150_Expo Go.jpg>)


![Darkmode Settings](<theme/assets/Screenshot_20240625_181136_Expo Go.jpg>) 

![Lightmode Settings](<theme/assets/Screenshot_20240625_181143_Expo Go.jpg>) 



## How to Run

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-repo/react-native-settings-app.git
    cd react-native-settings-app
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the application:**

    ```sh
    expo start
    ```

## Application Structure

The application is structured as follows:

- `App.js`: The main entry point of the application, sets up the navigation and theme context.
- `components/Settings.js`: The settings component where the theme toggle switch is implemented.
- `context/themeContext.js`: Contains the theme context and definitions for light and dark themes.
- `screens/SettingsScreen.js`: The screen containing the settings options.
- `screens/Home.js`: Placeholder for the Home screen.
- `screens/MyCards.js`: Placeholder for the MyCards screen.
- `screens/Statistics.js`: Placeholder for the Statistics screen.

