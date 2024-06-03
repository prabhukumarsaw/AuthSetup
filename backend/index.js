const express = require('express')
const {PORT, MongoDB} = require('./Config.js');
const  mongoose  = require('mongoose');
const userRouter = require('./Routers/UserRouter.js');

const app = express()
app.use(express.json());
//create route

app.get('/', ((request, response) => {
    return response.status(200).send('Welcome to TOP10')
}));

app.use('/api/auth', userRouter);

mongoose.connect(MongoDB).then(()=> {
    app.listen(PORT, ()=> {
        console.log('App Connected to Database');
        console.log('====================================');
        console.log(`PORT is listing at ${PORT}`);
    })
}).catch((error)=> {
    console.log('Internal Problem check the server ', error);
})
