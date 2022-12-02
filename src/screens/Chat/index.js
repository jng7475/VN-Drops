import React, { useState, useEffect, useCallback, useRef } from 'react';
import { View } from 'react-native';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { firebase } from '@react-native-firebase/auth';
import { sendMessageToRasa } from '../../api/RasaApi';
import { getUserStatus } from '../../api/GetPersonalInfo';

import styles from './styles';

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  // const [messageID, setMessageID] = useState(0);
  let messageID = useRef(0);
  // console.log(messages);
  const user = firebase.auth().currentUser;
  const userID = user.uid;
  const BOT_ID = 'bot_id';

  const handleSend = async (name, msg) => {
    await sendMessageToRasa(name, msg).then(response => {
      // console.log('send message', response);
      if (response.status === 'error') {
        const newMessage = {
          _id: messageID.current,
          text: '...',
          createdAt: new Date(),
          user: {
            _id: BOT_ID,
            name: 'bot',
            avatar: 'https://placeimg.com/140/140/any',
          },
        };
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, newMessage),
        );
        return;
      }

      const text = response.response[0].text;
      // console.log(text);
      console.log('id', messageID);
      const newMessage = {
        _id: messageID.current,
        text: text,
        createdAt: new Date(),
        user: {
          _id: BOT_ID,
          name: 'bot',
          avatar: 'https://placeimg.com/140/140/any',
        },
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessage),
      );
    });
  };

  useEffect(() => {
    let initialMessage = '';
    getUserStatus().then(res => {
      console.log(res);
      if (res === 'none') {
        initialMessage =
          'Xin chào bạn. Hãy thường xuyên cập nhật tình trạng sức khỏe của bạn nhé';
      } else if (res === 'appointment') {
        initialMessage =
          'Bạn đã đặt lịch thành công! Hãy theo dõi hướng dẫn tại "Hoạt động". Hãy hỏi tôi bất kỳ điều gì bạn nhé!';
      } else if (res === 'sos') {
        initialMessage =
          'Hãy đến địa điểm hiến máu sớm nhất có thể. Bạn có điều gì còn băn khoăn không ?';
      }
      setMessages([
        {
          _id: 0,
          text: initialMessage,
          createdAt: new Date(),
          user: {
            _id: BOT_ID,
            name: 'bot',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ]);
    });
  }, []);

  // const onSend = useCallback((newMessage = []) => {
  //   console.log('on send', newMessage);
  //   setMessageID(oldID => oldID + 1);
  //   console.log('aaa', messageID);
  //   setMessages(previousMessages =>
  //     GiftedChat.append(previousMessages, newMessage),
  //   );
  //   handleSend('trung', newMessage[0].text);
  // }, []);
  const onSend = (newMessage = []) => {
    console.log('bbb', messageID);
    console.log('on send', newMessage);
    messageID.current += 1;
    console.log('aaa', messageID);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessage),
    );
    handleSend('trung', newMessage[0].text);
  };

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
