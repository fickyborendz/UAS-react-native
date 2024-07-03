import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://example.com/potoprofil.jpg' }} // Ganti dengan URL gambar profil Anda
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
    backgroundColor: '#4CAF50', // Warna latar belakang header
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
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
