const App = {
    data() {
        return {
            name: '',
            todos: []
        }
    },
    methods: {
        async createTodo() {
            const data = {
                name: this.name,
                status: 'created'
            }
            const res = await fetch('/api/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            this.name = ''
            const newTodo = await res.json()
            //console.log(newTodo)
            this.todos.unshift(newTodo)
        },
        async remove(id) {
            await fetch(`/api/todo/${id}`, {method: 'DELETE'})
            this.todos = this.todos.filter(s => s.id !== id)
        }
    },
    async mounted() {
        const res = await fetch('/api/todos')
        this.todos = await res.json()
    }
}
Vue.createApp(App).mount('#app')
