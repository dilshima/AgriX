const express = require('express');
const cors = require('cors');
const {connect}= require('./models/db');
const userRoutes = require('./routes/user'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000  

app.use(cors());
app.use(express.json());

connect();

app.use('/user',userRoutes);
// app.use('/admin',adminRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
 })