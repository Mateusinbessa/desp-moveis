import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const savedEmail = await AsyncStorage.getItem('email');
    const savedPassword = await AsyncStorage.getItem('password');
    if (email === savedEmail && password === savedPassword) {
      navigation.replace('Home');
    } else {
      Alert.alert('Erro', 'Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Dinheiro</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Entrar" onPress={login} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}


