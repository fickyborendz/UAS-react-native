import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Foto sampul */}
        <View style={styles.coverPhoto}></View>

        {/* Foto profil */}
        <Image
          style={styles.profileImage}
          source={require('../assets/potoprofil.jpg')}
        />
        <Text style={styles.name}>ficky prasetyo</Text>
        <Text style={styles.bio}>Seseduh kopi yang pahit</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Umur:</Text>
          <Text style={styles.info}>21 tahun</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Lokasi:</Text>
          <Text style={styles.info}>Pamekasan</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Pekerjaan:</Text>
          <Text style={styles.info}>Mahasiswa</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: '#ffffff',
  },
  coverPhoto: {
    width: '100%',
    height: 150,
    backgroundColor: '#64B5F6',
    marginBottom: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    position: 'absolute',
    top: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 50, 
  },
  bio: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginTop: 5, 
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  info: {
    fontSize: 16,
  },
});

export default ProfileScreen;
