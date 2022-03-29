const notFoundMiddleware = (req, res) => res.status(404).send('Rout does not exist')

export default notFoundMiddleware;