import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); // Get the window dimensions

function HomeScreen(props) {
  const [isAddressFull, setIsAddressFull] = useState(false);
  const [selectedTab, setSelectedTab] = useState('tokens'); // 'tokens' or 'nfts'
  const [address, setAddress] = useState('1c9890...3cv5'); // The shortened address
  const navigation = useNavigation();

  const fullAddress = '1c9890abcd1234ef567890abcd1234ef5678903cv5'; // Replace with your full address

  // Function to handle press on NFT Get Started button
  const handleNFTGetStartedPress = () => {
    console.log("NFT Get Started Button Pressed");
    // Add additional logic for the NFT Get Started button here
  };

  // Function to handle press on Financing Get Started button
  const handleFinancingGetStartedPress = () => {
    console.log("Financing Get Started Button Pressed");
    navigation.navigate('FinancingApplication'); // Navigate to the FinancingApplication screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.walletContainer}>
        <Text style={styles.walletTitle}>Shaavin's Wallet</Text>
        <TouchableOpacity onPress={() => setIsAddressFull(!isAddressFull)}>
          <Text style={styles.walletAddress}>{isAddressFull ? fullAddress : address}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'tokens' && styles.selectedTab]}
          onPress={() => setSelectedTab('tokens')}>
          <Text style={styles.tabText}>Tokens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'nfts' && styles.selectedTab]}
          onPress={() => setSelectedTab('nfts')}>
          <Text style={styles.tabText}>NFTs</Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'tokens' && (
        <View style={styles.tokensContainer}>
          <Text style={styles.currencyText}>$</Text>
          <Text style={styles.tokenName}>Ripple</Text>
          <Text style={styles.tokenValue}>$0.00</Text>
        </View>
      )}
      {selectedTab === 'nfts' && (
        <View style={styles.nftContainer}>
          <Text style={styles.nftText}>Want to insert NFT?</Text>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleNFTGetStartedPress}>
            <Text style={styles.getStartedText}>Get started</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.financingContainer}>
        <Text style={styles.financingText}>Need Financing?</Text>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleFinancingGetStartedPress}>
          <Text style={styles.getStartedText}>Get started</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  walletContainer: {
    backgroundColor: '#333',
    padding: 80,
    borderRadius: 10,
    marginBottom: 20,
  },
  walletTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  walletAddress: {
    color: '#47a',
    marginTop: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#47a',
  },
  tabText: {
    color: '#fff',
  },
  tokensContainer: {
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
  },
  currencyText: {
    color: '#fff',
    fontSize: 24,
  },
  tokenName: {
    color: '#fff',
    marginLeft: 10,
  },
  tokenValue: {
    color: '#fff',
    marginLeft: 10,
  },
  nftContainer: {
    alignItems: 'center',
  },
  nftText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  getStartedButton: {
    backgroundColor: '#47a',
    padding: 30,
    borderRadius: 25,
    marginTop: 10,
  },
  getStartedText: {
    color: '#fff',
  },
  financingContainer: {
    padding: 30,
    alignItems: 'center',
    marginBottom: 50, // Add space at the bottom to ensure visibility
  },
  financingText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 0, // can lift if want
    backgroundColor: '#333',
  },
});

export default HomeScreen;
