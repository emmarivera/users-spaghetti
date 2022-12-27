const router = require('express').Router()

const userServices = require('./users.services')

router.get("/users", userServices.getAllUsers) //? /api/v1/users
router.post("/users", userServices.postUser) //? /api/v1/users

router.get("/users/:id", userServices.getUserById) //? /api/v1/users/:id
router.patch('/users/:id', userServices.patchUser) //? /api/v1/users/:id
router.delete('/users/:id', userServices.deleteUser) //? /api/v1/users/:id

module.exports = router