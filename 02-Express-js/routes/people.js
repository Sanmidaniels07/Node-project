const { Router } = require('express');
const express = require('express')
const router = express.Router();
const { getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson } = require('../controllers/people')

    // FIRST WAY OF SETTING UP ROUTES
//   router.get('/', getPeople)
//   router.post('/', createPerson)
//   router.post('/postman', createPersonPostman)
//   router.put('/:id', updatePerson)
//   router.delete(' /:id', deletePerson)


  // SECOND WAY: chaining the routes together by putting those that match together
  router.route('/').get(getPeople).post(createPerson)
  router.route('/postman').post(createPersonPostman)
  router.route('/:id').put(updatePerson).delete(deletePerson)



  module.exports = router