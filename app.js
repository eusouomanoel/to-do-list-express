const express = require('express');
const path = require('path');

const checkListRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task') //busca a rota criada

const rootRouter = require('./src/routes/index') //
const methodOverride = require('method-override') // Enviar um formulario interno com atualização e deletar , coisas que o HTML5 não faz naturalmente.

require('./config/database');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // vai pegar os valores do form e deixar disponível
app.use(methodOverride('_method', { methods: ['POST', 'GET'] })); // injetando middleware

app.use(express.static(path.join(__dirname, 'public'))) //Habilitar apara utilizar arquivos estáticos 

app.set('views', path.join(__dirname, 'src/views')); // setas as views para mostrar onde estão
app.set('view engine', 'ejs'); //definiu ejs como a engine principal de view

//middlewares, utilização
app.use('/', rootRouter)
app.use('/checklists', checkListRouter)
app.use('/checklists', taskRouter.checklistDependent)
app.use('/tasks', taskRouter.simple)



app.listen(3000, () => {
    console.log("Servidor foi iniciado");
})