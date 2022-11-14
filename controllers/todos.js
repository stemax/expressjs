let todos = [
    {id: '1', name: 'Write an e-mail', status: 'done'},
    {id: '2', name: 'Create a post', status: 'done'},
    {id: '3', name: 'Learn PHP', status: 'progress'},
    {id: '4', name: 'Update Linux', status: 'progress'},
]

export const getAll = (req, res) => {
    res.status(200).json(todos)
}

export const create = (req, res) => {
    // console.log(req.body)
    const newTodo = {
        id: Date.now().toString(),
        ...req.body
    }
    todos.unshift(newTodo)
    res.status(201).json(newTodo)
}

export const remove = (req, res) => {
    // console.log(req.params)
    res.status(200).json({})
}
