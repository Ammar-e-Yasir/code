import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Text,Picker } from "react-native";

export default function NeedyPersonSignUp({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [number, setNumber] = useState();

  const register = (e) => {
    let user = { email, password, username, number };
    console.log("userData", user);
  };

  //   onChangeText = (key, val) => {
  //     this.setState({ [key]: val })
  //   }
  //   signUp = async () => {
  //     const { username, password, email, phone_number } = this.state
  //     try {
  //       // here place your signup logic
  //       console.log('user successfully signed up!: ', success)
  //     } catch (err) {
  //       console.log('error signing up: ', err)
  //     }
  //   }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup !</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Father Name"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="CNIC"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="DD-MM-YY"
        autoCapitalize="none"
        keyboardType="number-pad"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Family members"
        autoCapitalize="none"
        keyboardType="number-pad"
        placeholderTextColor="white"
        onChangeText={(text) => {
          setUsername(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Monthly Incom"
        autoCapitalize="none"
        placeholderTextColor="white"
        keyboardType="number-pad"
        onChangeText={(text) => {
          setNumber(text);
        }}
      />

<Picker
        // selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Montly" value="monthly" />
        <Picker.Item label="Daily 1 time" value="1 time " />
        <Picker.Item label="Daily 2 time" value="2 time " />
        <Picker.Item label="Daily 3 time" value="3 time " />
      </Picker>

      <Button
        title="Sign Up"
        onPress={(e) => {
          register(e);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 40,
    backgroundColor: "#333",
    margin: 10,
    padding: 10,
    color: "white",
    borderRadius: 14,
    fontSize: 16,
    fontWeight: "500",
  },
  text: {
    fontSize: 40,
    color: "#333",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
