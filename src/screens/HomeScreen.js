import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, StatusBar } from 'react-native';

const HomeScreen = () => {
  // Data profil seseorang
  const profile = {
    name: 'indah puspita sari',
    bio: 'Bunga tanpa akar',
    location: 'Jawa timur , Indonesia',
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} backgroundColor='green' />
      <Profile profile={profile} />
      <ChatWindow />
    </View>
  )
}

const Profile = ({ profile }) => {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileName}>{profile.name}</Text>
      <Text style={styles.profileBio}>{profile.bio}</Text>
      <Text style={styles.profileLocation}>{profile.location}</Text>
    </View>
  );
};

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (messageInput) {
      const newMessage = {
        sender: 'Anda',
        message: messageInput,
        isSender: true, // Menandakan pesan dari pengirim
      };

      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatList}>
        {messages.map((message, index) => (
          <View key={index} style={[
            styles.chatItem,
            message.isSender ? styles.chatItemSender : styles.chatItemReceiver
          ]}>
            <Text style={[
              styles.chatMessage,
              message.isSender ? styles.chatMessageSender : styles.chatMessageReceiver
            ]}>
              {message.message}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.messageInput}
          value={messageInput}
          onChangeText={(text) => setMessageInput(text)}
          placeholder="Ketik pesan..."
        />
        <Button title="Kirim" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileBio: {
    fontSize: 15,
    marginTop: 5,
  },
  profileLocation: {
    fontSize: 15,
    color: '#666',
    marginTop: 5,
  },
  chatList: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  chatItem: {
    maxWidth: '80%',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-end',
  },
  chatItemSender: {
    backgroundColor: '#DCF8C6', // Warna latar belakang untuk pesan pengirim
    alignSelf: 'flex-end',
  },
  chatItemReceiver: {
    backgroundColor: '#F0F0F0', // Warna latar belakang untuk pesan penerima
    alignSelf: 'flex-start',
  },
  chatMessage: {
    fontSize: 16,
  },
  chatMessageSender: {
    color: '#000', // Warna teks untuk pesan pengirim
  },
  chatMessageReceiver: {
    color: '#000', // Warna teks untuk pesan penerima
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  messageInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default HomeScreen;
