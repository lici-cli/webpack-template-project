const express = require('express');
const path = require('path')


const app = express()
app.use(express.static(path.join(__dirname,'dist')))

app.listen(8888, _ => {
  console.log('8888 open');
})