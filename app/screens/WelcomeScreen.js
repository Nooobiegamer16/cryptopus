import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.Background}
            source={require("../assets/WSCryptopus.png")}>
            <View style={styles.loginButton}></View>
            <View style={styles.RegisterButton}></View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Background: {
        flex: 1,
        justifyContent:"flex-end",
        alignContent:"center",
        alignItems:"center"
    },
    loginButton: {
        width: '50%',
        height: 70,
        backgroundColor: '#fc5c65',
        position: "absolute",
        bottom:280


    },
    RegisterButton: {
        width: '50%',
        height: 70,
        backgroundColor: '#4ecdc4',
        position: "absolute",
        bottom:350
        
    }
});

export default WelcomeScreen;
