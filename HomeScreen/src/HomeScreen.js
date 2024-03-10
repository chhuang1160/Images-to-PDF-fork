import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToFeature = (feature) => {
    // Navigation logic based on feature
    console.log(`Navigate to ${feature}`);
    // Example: navigation.navigate(feature);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => navigateToFeature('ImagesToPdf')}>
        <Text>Images to PDF</Text>
      </TouchableOpacity>
      {/* Repeat for other features */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: '40%', // Adjust based on your layout preference
    aspectRatio: 1,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Example color
    // Add more styling as needed
  },
});

export default HomeScreen;
