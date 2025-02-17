import { Camera, CameraType,     } from 'expo-camera/legacy';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native';



export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [inputText, setInputText] = useState('');
  const [camera, setCamera] = useState(null);
  
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  const handleSubmit = () => {
    console.log('Submitted:', inputText);
    setInputText('');
  };
//   const [scanned, setScanned] = useState(false);
//     const [result, setResult] = useState('Nothing scanned yet');

//         const scanHandler = (type:any, data:any) => {
//     setScanned(false); // <----- change this 
//     setResult(data);
    
//     setTimeout(() => {
//         setScanned(true); // <----- change this 
//     }, 3000);
// }
  
const takePicture = async () => {
    if(camera){
        
        // setImage(data.uri);
    }
  }
  return (
    <View style={styles.container}>
      <Camera/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
    button: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
      borderRadius: 5,
    },
    text: {
      color: 'white',
      fontSize: 16,
    },
    inputContainer: {
      position: 'absolute',
      bottom: 2,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:'white',
      width:"100%",
      height:"20%"
      
    },
    input: {
      flex: 1,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 20,
      paddingHorizontal: 10,
      marginRight: 10,
      marginLeft:10,
      height:"40%",
      fontSize:18,
      
    },
    submitButton: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginRight:10,
    },
    submitButtonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });