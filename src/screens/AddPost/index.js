import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import { handleHospitalPost } from '../../api/HandleHospitalPost';

const AddPost = () => {
  const [content, setContent] = useState('');
  const handlePost = () => {
    handleHospitalPost();
  };

  return (
    <View>
      <Text>AddPost</Text>
      <TextInput
        placeholder="Content"
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.input}
      />
      <Button title="submit" onPress={handlePost} />
      <Text>{content}</Text>
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: '#DCD6D0',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '80%',
  },
});
