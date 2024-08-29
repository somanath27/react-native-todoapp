import { types, destroy, getParent, Instance } from 'mobx-state-tree';
const Todo = types
    .model('Todo', {
        id: types.identifierNumber,
        text: types.string,
    })
    .actions((self) => ({
        edit(newText: string) {
            self.text = newText;
        },
        remove() {
            getParent<any>(self, 2).remove(self);
        },
    }));

const TodoStore = types
    .model('TodoStore', {
        todos: types.array(Todo),
    })
    .actions((self) => ({
        addTodo(text: string) {
            const id = self.todos.length
                ? self.todos[self.todos.length - 1].id + 1
                : 1;
            self.todos.push({ id, text });
        },
        remove(todo: Instance<typeof Todo>) {
            destroy(todo);
        },
    }));


const store = TodoStore.create({ todos: [] });

export type TodoStoreType = Instance<typeof TodoStore>;
export type TodoType = Instance<typeof Todo>;

export default store;
