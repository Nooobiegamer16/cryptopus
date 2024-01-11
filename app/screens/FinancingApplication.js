// FinancingApplication.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FinancingApplication(props) {
  const navigation = useNavigation();

  // This function will be called when the user taps on the "Number of Months" option.
  const navigateToGrantConfirmation = () => {
    navigation.navigate('GrantConfirmation'); // Make sure 'GrantConfirmation' matches your screen name in the navigator
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get up to $5,000!</Text>
      
      <Text style={styles.label}>User Details</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Retrieve MyInfo with Singpass</Text>
      </TouchableOpacity>
      
      <Text style={styles.label}>Fill in the details</Text>
      <Text style={styles.label}>Asset: (Collateral)</Text>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionButtonText}>NFT, Salary, ...</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionButtonText}>Upload proof here</Text>
      </TouchableOpacity>
      
      <TextInput
        style={styles.input}
        placeholder="In how many months can you pay back $1000?"
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={styles.optionButton} onPress={navigateToGrantConfirmation}>
        <Text style={styles.optionButtonText}>Enter</Text>
      </TouchableOpacity>
      
      <Text style={styles.processingText}>Our smart AI will process the data</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#47a',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  optionButton: {
    backgroundColor: '#47a',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  optionButtonText: {
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 15,
    marginBottom: 20,
    color: '#000',
  },
  processingText: {
    color: '#47a',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default FinancingApplication;
