import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import mainRoutes from './server/routes/main.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// set up mongoose
mongoose.connect('mongodb+srv://dbUser:tandat2200@cluster0.3v5gs.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.log('Database failed');
    });

const port = 3002;

//set up route
app.use('/api', mainRoutes);

app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.status(200).json({
        message: 'Welcome to API'
    });
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});