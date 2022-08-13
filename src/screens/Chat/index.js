import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { firebase } from '@react-native-firebase/auth';

import styles from './styles';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  // console.log(messages);
  const user = firebase.auth().currentUser;
  const userID = user.uid;
  const BOT_ID = 'bot_id';

  const handleSend = async (name, msg) => {
    // console.log(msg);
    await fetch(
      'https://rasa-server-jng7475.cloud.okteto.net/webhooks/rest/webhook',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          charset: 'UTF-8',
        },
        credentials: 'same-origin',
        body: JSON.stringify({ sender: name, message: msg }),
      },
    )
      .then(response => response.json())
      .then(response => {
        if (response !== []) {
          console.log(response);
          const text = response !== undefined ? response[0].text : '...';
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
        }
      })
      .catch(err => {
        console.log('error ', err);
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
  }, [user]);

  const onSend = useCallback((messages = []) => {
    console.log(messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    handleSend('trung', messages[0].text);
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
      onSend={messages => onSend(messages)}
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
