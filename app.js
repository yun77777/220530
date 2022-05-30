const express = require('express');
const app = express();
const router = require('./routes/router');
// const indexRouter = require('./routes/index'); // possible to omit index.js
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

// app.get('/', (req, res) => {
//     res.send('hi');
// })

app.use('/test', router);


app.route('/sameRoute')
.get((req, res) => {
    res.send('get')
})
.post((req, res) =>{
    res.send('post')
})


app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(3000, () => console.log('3000 port'));