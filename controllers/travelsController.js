const createTravel = async (req, res) => {
    res.send('create travel')
}

const getAllTravels = async (req, res) => {
    res.send('get all travel')
}

const deleteTravel = async (req, res) => {
    res.send('delete travel')
}

const updateTravel = async (req, res) => {
    res.send('update travel')
}

const showStats = async (req, res) => {
    res.send('show stats')
}

export { createTravel, deleteTravel, getAllTravels, updateTravel, showStats }