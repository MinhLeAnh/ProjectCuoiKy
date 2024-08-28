import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert,StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Có lỗi xảy ra', 'Hãy nhập email và mật khẩu !');
    } else if (!isValidEmail(email)) {
      Alert.alert('Có lỗi xảy ra', 'Hãy nhập đúng định dạng email !');
    } else {
      // Điều hướng đến trang 'RealApp' nếu người dùng đã nhập email và mật khẩu
      navigation.navigate('RealApp');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.glitch.global/134d6c6c-3859-45eb-b0ba-b042e212630b/Cool%20Kids%20Fresh%20Air.png?v=1724080692715' }}
        style={styles.image}
      />
      
      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.life]}>Life</Text>
        <Text style={[styles.title, styles.ease]}>Ease</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forget password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or sign up with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>f</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  image: {
    position: "absolute",
    width: 411,
    height: 403,
    top: -236,
    left: 1,
    opacity: 0.2,
  },
  titleContainer: {
    position: "absolute",
    top: "25%", // Can adjust to fit your needs
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#040d30",
  },
  life: {
    color: "#A5B79F",
  },
  ease: {
    color: "#6A8B85",
  },
  input: {
    top: 35,
    width: 328,
    height: 48,
    padding: 10,
    marginVertical: 20,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 25,
    right: 30,
    fontSize: 14,
  },
  forgotPasswordText: {
    color: "#000000",
  },
  button: {
    marginTop: 60,
    backgroundColor: "#254BEC",
    width: 205,
    height: 48,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginRight: 5,
    fontSize: 16,
  },
  orText: {
    color: "#000000",
    marginVertical: 10,
    fontSize: 14,
    top: 60,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
    top: 70,
  },
  socialButton: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  socialButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#040d30",
  },
});

export default LoginScreen;
