import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, StatusBar, Image } from 'react-native';

const HomeScreen = () => {
  // Data profil seseorang
  const profile = {
    name: 'Indah Puspita Sari',
    bio: 'Bunga tanpa akar',
    location: 'Jawa Timur, Indonesia',
    image: require('../assets/potoprofil.jpg') 
  };

  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const handleSendMessage = () => {
    if (messageInput) {
      const newMessage = {
        sender: 'Anda',
        message: messageInput,
        isSender: true,
      };

      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor='#007bff' />
      <Profile profile={profile} />
      <ChatWindow messages={messages} messageInput={messageInput} setMessageInput={setMessageInput} onSendMessage={handleSendMessage} />
    </View>
  );
};

const Profile = ({ profile }) => {
  return (
    <View style={styles.profileContainer}>
      <Image source={profile.image} style={styles.profileImage} />
      <Text style={styles.profileName}>{profile.name}</Text>
      <Text style={styles.profileBio}>{profile.bio}</Text>
      <Text style={styles.profileLocation}>{profile.location}</Text>
    </View>
  );
};

const ChatWindow = ({ messages, messageInput, setMessageInput, onSendMessage }) => {
  return (
    <View style={styles.chatContainer}>
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
        <Button title="Kirim" onPress={onSendMessage} />
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
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
  chatContainer: {
    flex: 1,
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
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  chatItemReceiver: {
    backgroundColor: '#F0F0F0',
    alignSelf: 'flex-start',
  },
  chatMessage: {
    fontSize: 16,
  },
  chatMessageSender: {
    color: '#000', 
  },
  chatMessageReceiver: {
    color: '#000', 
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
