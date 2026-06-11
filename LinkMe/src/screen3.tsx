import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function Screen3({ route }:any) {
  const { name, selectedApps } = route.params;

  const [links, setLinks] = useState({});

  const handleChange = (app:string, value:string) => {
    setLinks({
      ...links,
      [app]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Links:', links);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        Welcome, {name}
      </Text>

      <Text style={styles.subHeading}>
        Enter your profile URLs
      </Text>

      {selectedApps.map((app:string) => (
        <View key={app}>
          <Text style={styles.label}>
            {app} URL
          </Text>

          <TextInput
            style={styles.input}
            placeholder={`Enter ${app} profile URL`}
            onChangeText={(text) =>
              handleChange(app, text)
            }
          />
        </View>
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subHeading: {
    fontSize: 18,
    marginBottom: 20,
  },

  label: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  },

  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});