const express = require('express');
const connectDB = require('./config/db')
const app = express();
const path = require('path');




connectDB()




app.use(express.json())

app.get('/api/test', (req,res)=> res.send('API Running'))

app.use('/uploads',express.static('uploads'))

// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`));