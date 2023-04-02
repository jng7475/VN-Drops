// import { Configuration, OpenAIApi } from 'openai';
// import React, { useContext, useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { TextInput } from 'react-native-paper';
// import { setUserStatus } from '../../api/GetPersonalInfo';
// import { AuthContext } from '../../navigations/AuthProvider';

// const Settings = () => {
//   const [inputText, setInputText] = useState('hello');
//   const [response, setResponse] = useState('loading');
//   const { signOut } = useContext(AuthContext);
//   const { Configuration, OpenAIApi } = require('openai');
//   const configuration = new Configuration({
//     apiKey: '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',
//   });
//   const openai = new OpenAIApi(configuration);
//   const getAIResponse = () => {
//     // fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //     Authorization:
//     //       'Bearer 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',
//     //   },
//     //   body: JSON.stringify({
//     //     prompt: 'What is the capital of France?',
//     //     temperature: 0.5,
//     //     max_tokens: 128,
//     //   }),
//     // })
//     //   .then(response => response.json())
//     //   .then(data => {
//     //     console.log(data);
//     //   })
//     //   .catch(error => {
//     //     console.error('Error:', error);
//     //   });

//     openai
//       .createCompletion({
//         model: 'text-ada-001',
//         prompt: inputText,
//         max_tokens: 256,
//         temperature: 0.7,
//       })
//       .then(response => {
//         setResponse(response.data.choices[0].text);
//       });
//   };
//   const handleSignOut = () => {
//     signOut();
//   };
//   const handleReset = () => {
//     setUserStatus('none');
//   };
//   return (
//     <View>
//       <Text>Settings</Text>

//       <TouchableOpacity onPress={handleSignOut}>
//         <Text>Sign out </Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={{ marginTop: 100 }} onPress={handleReset}>
//         <Text>Reset </Text>
//       </TouchableOpacity>
//       <TextInput
//         placeholder="Enter what you want to ask"
//         onChangeText={setInputText}
//       />
//       <Text>{response}</Text>
//       <TouchableOpacity style={{ margin: '30%' }} onPress={getAIResponse}>
//         <Text>Enter</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Settings;

