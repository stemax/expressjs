let servers = [
    {id: '1', name: 'AWS', status: 'working'},
    {id: '2', name: 'Google Cloud', status: 'working'},
    {id: '3', name: 'Yandex Cloud', status: 'working'},
    {id: '4', name: 'Microsoft', status: 'pending'},
    {id: '11', name: 'AWS2', status: 'working'},
    {id: '12', name: 'Google Cloud2', status: 'working'},
    {id: '13', name: 'Yandex Cloud2', status: 'working'},
    {id: '14', name: 'Microsoft2', status: 'pending'},
]

export const getAll = (req, res) => {
    res.status(200).json(servers)
}

export const create = (req, res) => {
    // console.log(req.body)
    const newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    servers.push(newServer)
    res.status(201).json(newServer)
}
