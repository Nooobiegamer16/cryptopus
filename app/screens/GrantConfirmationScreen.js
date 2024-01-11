// GrantConfirmationScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GrantConfirmationScreen = ({ navigation }) => {
  // Function to handle 'Home' button press
  const handleHomePress = () => {
    // Navigate to the Home screen or previous screen
    navigation.navigate('Home'); // or navigation.navigate('Home');
  };



  return (
    <View style={styles.container}>
      <View style={styles.congratulationBanner}>
        <Text style={styles.congratulationText}>CONGRATULATION</Text>
      </View>

      <Text style={styles.grantedText}>You have been granted</Text>

      <TouchableOpacity style={styles.amountButton}>
        <Text style={styles.amountText}>$1,000!</Text>
      </TouchableOpacity>

      <Text style={styles.descriptionText}>
        Pay back on time to increase your limit over time
      </Text>

      <Text style={styles.payBackText}>Pay back by</Text>

      <TouchableOpacity style={styles.termButton}>
        <Text style={styles.termText}>3 Months</Text>
      </TouchableOpacity>

      <Text style={styles.feesText}>Fees:</Text>
      <Text style={styles.feesValueText}>3% per annum</Text>
      <Text style={styles.latePaymentText}>Late payment: $50 worth of XRP</Text>

      <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Assuming a dark theme as per the image
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  congratulationBanner: {
    backgroundColor: '#333', // Dark gray as per the image
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  congratulationText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  grantedText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  amountButton: {
    backgroundColor: '#47a', // Blue color as per the image
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
  },
  amountText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptionText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 20,
  },
  payBackText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  termButton: {
    // Similar style to amountButton
  },
  termText: {
    // Similar style to amountText
  },
  feesText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  feesValueText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  latePaymentText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: '#47a', // Blue color as per the image
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // ... add any additional styles you may need
});

export default GrantConfirmationScreen;
