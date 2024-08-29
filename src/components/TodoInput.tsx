import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import {TodoStoreType, TodoType} from '../models/TodoStore';

interface TodoInputProps {
  store: TodoStoreType;
  selectedTodo: TodoType | null;
  onSave: () => void;
}

const TodoInput = observer(({store, selectedTodo, onSave}: TodoInputProps) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text);
    }
  }, [selectedTodo]);

  const handleSave = () => {
    if (selectedTodo) {
      selectedTodo.edit(text);
    } else {
      store.addTodo(text);
    }
    setText('');
    onSave();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter todo"
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 16,
    gap: 10,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 18,
    color: '#333',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default TodoInput;
