import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import store, {TodoType} from '../../models/TodoStore';
import TodoList from '../../components/TodoList';
import TodoInput from '../../components/TodoInput';
import Header from '../../components/Header';
import {colors} from '../../theme';

export const Home = observer(() => {
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);

  const handleEdit = (todo: TodoType) => {
    setSelectedTodo(todo);
  };

  const handleSave = () => {
    setSelectedTodo(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header title="TODO" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRMwZYLy0XuFOa5rKlDzS9UYa2aSxCBfeizDfX_GGeRCgI1gtugu9deYURx4wCOZ7UF4&usqp=CAU" />
        <TodoInput
          store={store}
          selectedTodo={selectedTodo}
          onSave={handleSave}
        />
        <TodoList store={store} onEdit={handleEdit} />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tint,
  },
});

export default Home;
