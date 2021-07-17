import session from 'express-session'

const sessions = session({
  key: 'user_sid',
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 600000 }
})

export default sessions