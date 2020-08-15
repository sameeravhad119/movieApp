let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let app = express();

let userRouter = require('./routes/api/user');
const getEnvironmentVariables = require('./environments/env');

app.use(bodyParser.urlencoded({ extended: true }));

//db connected
mongoose.connect(
    getEnvironmentVariables().dbUrl,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('db connected');
});

app.listen(8080, () => {
    console.log('app is listening on 8080');
});

app.use('/api/user', userRouter);

//404 Page not found
app.use((req, res, next) => {
    res.status(404).send({
        message: '404 Page not found',
        statusCode: 404
    })
})

//error handler
app.use((error, req, res, next) => {
    let msg = error.message || 'Something went wrong';
    let status = error.status || 400;
    res.send({
        message: msg,
        statusCode: status
    })
})
