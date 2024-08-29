import React, {useState} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';
import {TodoStoreType, TodoType} from '../models/TodoStore';
import ConfirmationModal from '../components/ConfirmationModal';
import {colors} from '../theme';

interface TodoListProps {
  store: TodoStoreType;
  onEdit: (todo: TodoType) => void;
}

const TodoList = observer(({store, onEdit}: TodoListProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);

  const handleDelete = (todo: TodoType) => {
    setSelectedTodo(todo);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedTodo) {
      selectedTodo.remove();
      setSelectedTodo(null);
      setModalVisible(false);
    }
  };

  const cancelDelete = () => {
    setSelectedTodo(null);
    setModalVisible(false);
  };
  return (
    <FlatList
      data={store.todos.slice()}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.card}>
          <Text style={styles.cardText}>{item.text}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.editButton]}
              onPress={() => onEdit(item)}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={() => handleDelete(item)}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
          {selectedTodo && (
            <ConfirmationModal
              visible={modalVisible}
              onConfirm={confirmDelete}
              onCancel={cancelDelete}
              message={selectedTodo.text}
            />
          )}
        </View>
      )}
    />
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.screenBackground,
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: colors.positive,
  },
  deleteButton: {
    backgroundColor: colors.negative,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default TodoList;
