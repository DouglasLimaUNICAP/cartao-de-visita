import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={require('../assets/images/eu.jpg')} 
          style={styles.image} 
        />
        <Text style={styles.name}>Douglas Lima</Text>
        <Text style={styles.role}>Analista de Customer Success Junior | Estudante</Text>
        <Text style={styles.contact}>📧 douglasguilhermeclima@gmail.com</Text>
        <Text style={styles.contact}>📞 (81) 99927-6700</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DFFFD8', 
  },
  card: {
    backgroundColor: '#fff', 
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: 300,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#4CAF50', 
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  contact: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});
