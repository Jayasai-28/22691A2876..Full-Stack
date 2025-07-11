export default function logger(req, res, next) {
  req.logs = req.logs || [];

  const logEntry = `Method=${req.method} URL=${req.originalUrl} Time=${new Date().toISOString()}`;
  req.logs.push(logEntry);
  console.log("[LOGGER]", logEntry);

  next();
}
