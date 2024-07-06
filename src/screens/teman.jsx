import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';

const TemanComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Data teman (bisa diambil dari API atau hard-coded)
  const dataTeman = [
    { id: '1', name: 'John Doe', image: require('../assets/foto 1.jpg') },
    { id: '2', name: 'Jane Smith', image: require('../assets/foto 2.jpg') },
    { id: '3', name: 'Michael Brown', image: require('../assets/potoprofil.jpg') },
    // Tambahkan data teman lainnya sesuai kebutuhan
  ];

  // Handle search input change
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const filtered = dataTeman.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  // Render item untuk FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teman</Text>
      
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari teman..."
        onChangeText={handleSearch}
        value={searchQuery}
      />

      {/* FlatList */}
      <FlatList
        data={searchQuery ? filteredData : dataTeman}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  flatList: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  itemName: {
    fontSize: 18,
  },
});

export default TemanComponent;
