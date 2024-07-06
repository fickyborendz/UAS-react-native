import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Beranda = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      nama: 'Rian bramasta',
      username: 'Baru saja',
      caption: 'Segala cobaan adalah cara Tuhan untuk menguatkan.',
      image: require('../assets/potoprofil.jpg')
    },
    {
      id: '2',
      nama: 'Cak riswan',
      username: '6 Jam',
      caption: 'Lebih baik diam daripada panjang masalahnya.',
      image: require('../assets/potoprofil.jpg')
    },
    {
      id: '3',
      nama: 'Decky septian',
      username: '3 Jam',
      caption: 'Keberanian adalah kunci untuk membuka pintu kesuksesan.',
      image: require('../assets/potoprofil.jpg')
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.searchBar}>
        <Text style={styles.searchBarText}>Apa yang Anda pikirkan?</Text>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Image source={require('../assets/potoprofil.jpg')} style={styles.logo} />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.postName}>{item.nama}</Text>
                <Text style={styles.postUsername}>{item.username}</Text>
                <Text style={styles.postCaption}>{item.caption}</Text>
              </View>
            </View>
            <Image source={item.image} style={styles.postImage} />
            <View style={styles.postActions}>
              <TouchableOpacity style={styles.postActionButton}>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  searchBar: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderColor: '#e0e0e0',
  },
  searchBarText: {
    fontSize: 16,
  },
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#007bff',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postUsername: {
    fontSize: 14,
    color: 'gray',
  },
  postImage: {
    width: '100%',
    height: 500,
    marginTop: 20,
    marginBottom: 20,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  postCaptionContainer: {
    marginTop: 5,
  },
  postCaption: {
    fontSize: 16,
  },
  postActions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  postActionButton: {
    marginRight: 10,
  },
  postActionIcon: {
    width: 20,
    height: 20,
  },
});

export default Beranda;
