import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {colors} from '../../../theme';
import Toast from 'react-native-toast-message';

interface FormState {
  name: string;
  email: string;
  password: string;
}

const FormValidation = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormState>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (name: keyof FormState, value: string) => {
    setForm({...form, [name]: value});
  };

  const validate = (): boolean => {
    let valid = true;
    const newErrors: FormState = {name: '', email: '', password: ''};

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim() || !emailRegex.test(form.email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }

    if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log(form);
      Toast.show({
        type: 'success',
        text1: 'Form submitted successfully!',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Form</Text>
      <TextInput
        placeholder="Name"
        value={form.name}
        onChangeText={value => handleChange('name', value)}
        style={styles.input}
      />
      {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

      <TextInput
        placeholder="Email"
        value={form.email}
        onChangeText={value => handleChange('email', value)}
        style={styles.input}
        keyboardType="email-address"
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      <TextInput
        placeholder="Password"
        value={form.password}
        onChangeText={value => handleChange('password', value)}
        style={styles.input}
        secureTextEntry
      />
      {errors.password ? (
        <Text style={styles.error}>{errors.password}</Text>
      ) : null}

      <TouchableOpacity onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
      <View style={{marginTop: 50, alignItems: 'center'}}>
        <Text>Name:{form.name}</Text>
        <Text>Email:{form.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: colors.background,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  submit: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormValidation;
