var connect = require('connect')
var serveStatic = require('serve-static')

var app = connect()

app.use(serveStatic('particles.js/demo', {'index': ['index.html']}))
console.log('Server 3k')
app.listen(3000)
