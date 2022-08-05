import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { Camera } from 'react-native-vision-camera';
import Scanner from './components/Scanner';
import { RNFS } from 'react-native-fs';
import { step4Styles } from './styles';
import { saveImageToFirebase } from '../../../api/UploadPhoto';
import styles from '../styles';

const Step4 = ({ setStep, userDetails }) => {
  const [imagePath, setImagePath] = useState('');

  const camera = React.createRef();

  const handleNext = () => {
    setStep(step => step + 1);
  };

  const handleCameraClicked = async () => {
    const photo = await camera.current.takePhoto({
      flash: 'on',
    });
    // console.log(photo);
    setImagePath('file://' + photo.path);
    saveImageToFirebase(imagePath, 'BusinessLicense', userDetails.fullname);
  };
  console.log(imagePath);
  return (
    <View>
      <Scanner ref={camera} />
      <TouchableOpacity
        onPress={handleCameraClicked}
        style={step4Styles.cameraButton}>
        <Text style={{ color: 'red' }}>test</Text>
      </TouchableOpacity>
      {/* {imagePath !== '' && (
        <Image source={{ uri: imagePath }} style={step4Styles.img} />
      )} */}
      <View style={styles.bottom}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleNext} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Step4;
