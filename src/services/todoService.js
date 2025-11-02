class TodoService {
    constructor() {
        this.todos = [
            { id: 1, text: 'Learn React', completed: false },
            { id: 2, text: 'Build a ToDo App', completed: true },
            { id: 3, text: 'Deploy to production', completed: false }
        ];
        this.nextId = 4;
    }

    getAllTodos() {
        return this.todos;
    }


    addTodo(title) {
        const newTodo = {
            id: this.nextId++,
            title,
            completed: false,
        };
      
        this.todos.push(newTodo);
        return newTodo;
    }
    
    updateTodo(id, update) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos[index] = { ...this.todos[index], ...update };
            return this.todos[index];
        }
        return null;
    };
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    };

    getFilteredTodos(filter) {
        switch (filter) {
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            default:
                return this.todos;
        }
    
    }
}    

export default new TodoService();