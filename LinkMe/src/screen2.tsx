import { View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView, } from 'react-native'
import React, {useState} from 'react'


export default function screen2({ navigation }) {
  const [name, setName] = useState('');

  const [selectedApps, setSelectedApps] = useState([]);

  const socialApps = [
    'Instagram',
    'LinkedIn',
    'GitHub',
    'Twitter',
    'Facebook',
    'YouTube',
  ];

  const toggleApp = (app) => {
    if (selectedApps.includes(app)) {
      setSelectedApps(
        selectedApps.filter((item) => item !== app)
      );
    } else {
      setSelectedApps([...selectedApps, app]);
    }
  };

  const handleNext = () => {
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }

    if (selectedApps.length === 0) {
      alert('Please select at least one social app');
      return;
    }

    navigation.navigate('screen3', {
      name,
      selectedApps,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        Create Your LinkMe Profile
      </Text>

      <Text style={styles.label}>Enter Your Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>
        Select Social Apps
      </Text>

      {socialApps.map((app) => (
        <TouchableOpacity
          key={app}
          style={styles.option}
          onPress={() => toggleApp(app)}
        >
          <Text style={styles.checkbox}>
            {selectedApps.includes(app)
              ? '☑'
              : '☐'}
          </Text>

          <Text style={styles.optionText}>
            {app}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.button}
        onPress={handleNext}
      >
        <Text style={styles.buttonText}>
          Next
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },

  checkbox: {
    fontSize: 24,
    marginRight: 10,
  },

  optionText: {
    fontSize: 18,
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