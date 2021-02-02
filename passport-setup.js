// const { use } = require('passport')
// const passport =require('passport')
// const GoogleStrategy = require('passport-google-oauth2').Strategy

// passport.serializeUser(function(user, done){
//   done(null, user)
// })

// passport.deserializeUser(function(user, done){
//   done(null, user)
// })

// passport.use(new GoogleStrategy({
//   clientID: '392710913316-u8mlrnjv903qkgoa7cv1d49ck6k3t8ej.apps.googleusercontent.com',
//   clientSecret: '_XzHlN-Ajy7NHtYm3132IzJr',
//   callbackURL : 'http://localhost:3000/auth/google/callback'
// }, function(request, accessToken, refreshToken, profile, done){
//   console.log(profile)
//   return done(null, profile)
// }))

const passport =require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy

passport.serializeUser(function(user, done){
  done(null, user)
})

passport.deserializeUser(function(user, done){
  done(null, user)
})

passport.use(new GoogleStrategy({
  clientID : '392710913316-u8mlrnjv903qkgoa7cv1d49ck6k3t8ej.apps.googleusercontent.com',
  clientSecret : '_XzHlN-Ajy7NHtYm3132IzJr',
  callbackURL : 'http://localhost:3000/auth/google/callback'
}, (request, accressToken, refreshToken, profile, done)=>{
  console.log(profile)
  return done(null, profile)
}))