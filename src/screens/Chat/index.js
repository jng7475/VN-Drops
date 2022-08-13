import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { firebase } from '@react-native-firebase/auth';
import { sendMessageToRasa } from '../../api/RasaApi';

import styles from './styles';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  // console.log(messages);
  const user = firebase.auth().currentUser;
  const userID = user.uid;
  const BOT_ID = 'bot_id';

  const handleSend = async (name, msg) => {
    await sendMessageToRasa(name, msg).then(response => {
      console.log(response);
      if (response.status === 'error') {
        const newMessage = {
          _id: messages.length + 1,
          text: '...',
          createdAt: new Date(),
          user: {
            _id: BOT_ID,
            name: 'User',
            avatar: 'https://placeimg.com/140/140/any',
          },
        };
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, newMessage),
        );
        return;
      }

      const text = response.response[0].text;
      console.log(text);
      const newMessage = {
        _id: messages.length + 1,
        text: text,
        createdAt: new Date(),
        user: {
          _id: BOT_ID,
          name: 'User',
          avatar: 'https://placeimg.com/140/140/any',
        },
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessage),
      );
    });
  };

  useEffect(() => {
    setMessages([
      {
        _id: 0,
        text: 'Hello! How can I help you?',
        createdAt: new Date(),
        user: {
          _id: BOT_ID,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessage = []) => {
    console.log(newMessage);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessage),
    );
    handleSend('trung', newMessage[0].text);
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={styles.MaterialCommunityIcons}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => onSend(newMessage)}
      user={{
        _id: userID,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatScreen;
