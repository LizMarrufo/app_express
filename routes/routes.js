//cargue la conexion del grupo MySQL
const pool = require('../data/config');


const router = app =>{
    //mostrar mensaje de bienvenida de root
    app.get('/', (request, response) =>{
        response.send({
            message: 'Bienvenido a Node.js Express REST API'
        });
    });

    //mostrar todos los usuarios
    app.get('/users', (request, response) =>{
        pool.query('SELECT * FROM users', (error, result) =>{
            if(error) throw error;

            response.send(result);
        });
    });

   //mostrar un solo usuario por ID
   app.get('/users/:id', (request, response) =>{
       const id = request.params.id;
    pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) =>{
        if (error) throw error;

        response.send(result);
       });
   });

    //agregar nuevo usuario
    app.post('/users', (request, response) =>{
        pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
                if(error) throw error;

                response.status(201).send(`User added whit ID: ${result.insertId}`);
            });
    });

}
   //exportar el router 
   module.exports = router; 

