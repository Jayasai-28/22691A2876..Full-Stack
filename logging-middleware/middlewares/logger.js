export default function logger(req, res, next) {
  req.logs ??= [];
  const time = new Date().toISOString();
  req.logs.push(`Method=${req.method} URL=${req.originalUrl} Time=${time}`);
  next();
}