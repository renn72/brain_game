function errorHandler(err, req, res, next) {
  let status = err.status || 500
  let message = err.message || 'something went BOOM!'

  res.status(status).json({ message })

  next(err)
}

export default errorHandler
