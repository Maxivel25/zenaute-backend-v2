const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${err.message || 'Unknown error'}`);

  const status = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    success: false,
    error: message,
  });
};

export default errorHandler;
