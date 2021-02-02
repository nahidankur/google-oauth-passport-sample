

const express =require('express')
const passport =require('passport')
const cookieSession =require('cookie-session')
require('./passport-setup')
const app = express()
app.use(cookieSession({
  name: 'Sawa-session',
  keys : ['key1', 'key2']
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'ejs')

app.get('/google', passport.authenticate('google', {scope : ['profile', 'email']}))
app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect : '/failed'}),
(req, res)=>{
  res.redirect('/profiles')
})

const isloggedin = (req, res, next)=>{
  if(req.user){
    next()
  }else{
    res.send('Log in failed')
  }
}

app.get('/', (req, res)=>{
  res.render('pages/index')
})
app.get('/failed', (req, res)=>{
  res.send('You have failed to log in')
})

app.get('/profiles', isloggedin, (req, res)=>{
  res.render('pages/profile', {name : req.user.displayName, pic : req.user.photos[0].value, email: req.user.emails[0].value})
})

app.get('/logout', (req, res)=>{
  req.session = null
  req.logOut()
  res.redirect('/')
})

const PORT = process.env.PORT || 3000

app.listen(3000, ()=>{
  console.log('Server is runnig under port 3000')
})
