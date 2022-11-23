import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { Camera } from 'react-native-vision-camera';
import Scanner from './components/Scanner';
import { RNFS } from 'react-native-fs';
import { step3Styles } from './styles';
import styles from '../styles';
import { saveImageToFirebase } from '../../../api/UploadPhoto';

const Step3 = ({ setStep, userDetails }) => {
  const [imagePath, setImagePath] = useState('');
  const camera = React.createRef();
  const handleNext = () => {
    if (imagePath) {
      setStep(step => step + 1);
    }
  };
  const handleCameraClicked = async () => {
    const photo = await camera.current.takePhoto({
      flash: 'on',
    });
    // console.log(photo);
    setImagePath('file://' + photo.path);
    saveImageToFirebase(imagePath, 'CCCD', userDetails.fullname);
  };
  console.log(imagePath);
  return (
    <View>
      <Scanner ref={camera} />
      <TouchableOpacity
        onPress={handleCameraClicked}
        style={step3Styles.cameraButton}>
        <Text style={{ color: 'red' }}>test</Text>
      </TouchableOpacity>
      {/* {imagePath !== '' && (
        <Image source={{ uri: imagePath }} style={step3Styles.img} />
      )} */}
      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleNext} style={styles.button}>
            <Text style={styles.buttonText}>Tiếp theo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Step3;
