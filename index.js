const express = require('express')
const path = require('path')
const cors = require('cors')
const { getAllAuthors, getAuthorByIdOrName } = require('./controllers/authors')
const { getAllGenres, getGenreById } = require('./controllers/genres')
const { getAllNovels, getNovelByIdOrTitle } = require('./controllers/novels')

const app = express()

app.use((req, res, next) => {
  res.setHeader('content-security-policy-report-only',
    // eslint-disable-next-line max-len
    'default-src \'self\'; script-src \'report-sample\' \'self\'; style-src \'report-sample\' \'self\'; object-src \'none\'; base-uri \'self\'; connect-src \'self\' https://api.github.com; font-src \'self\'; frame-src \'self\'; img-src \'self\' https://*.githubusercontent.com; manifest-src \'self\'; media-src \'self\'; report-uri https://5f723390a82aebac90867ce8.endpoint.csper.io/; worker-src \'none\';')
  next()
})

app.use(cors({ origin: 'http://localhost:3000' }))

app.use(express.static('public'))

app.get('/api/authors', getAllAuthors)
app.get('/api/authors/:identifier', getAuthorByIdOrName)

app.get('/api/genres', getAllGenres)
app.get('/api/genres/:id', getGenreById)

app.get('/api/novels', getAllNovels)
app.get('/api/novels/:identifier', getNovelByIdOrTitle)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(8080, () => {
  console.log('Listening on port 8080...') // eslint-disable-line no-console
})
