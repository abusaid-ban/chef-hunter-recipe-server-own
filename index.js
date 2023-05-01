const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Chef-Hunting Server is running!')
})

app.listen(port, () => {
  console.log(`Chef Hunting server running on port ${port}`)
})