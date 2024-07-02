import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([
    { id: '1', name: 'indah puspita sari' },
    { id: '2', name: 'yongky' },
    { id: '3', name: 'natasya' },
    { id: '4', name: 'risky' },
    { id: '5', name: 'galang pratama' },
    { id: '6', name: 'sindy' },
  ]);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredItems = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchText}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={{ marginTop: 20 }}>
            <Text>No results found</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;
