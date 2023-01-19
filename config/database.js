const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true); //Como resolver Mongoose Deprecation Warning the strictQuery

mongoose.connect('mongodb://127.0.0.1/todo-list')
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error(err));