import user from './model/user-data.js';
import User from './model/user-data.js'

  
//   function isCherries(User) {
//     return User.username === "admin" & User.password === "123456";
//   }
//   const result = User.find(isCherries)
//   if (result) {
//     console.log(result)
//   } else {
//     console.log('undefine')
//   }
const usernameR = "admin"
const passwordR = "123456"
const result = User.find(({username, password}) => {
    return (username === usernameR & 
        password === passwordR)
})
if (result) {
    console.log(result)
}
else {
    console.log("wrong")
}