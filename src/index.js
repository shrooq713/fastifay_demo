import fastify from 'fastify';
import fastifyMysql from '@fastify/mysql';
import userController from './user-controller.js';

const app = fastify({
    logger: true
});
// database access

app.register(fastifyMysql, {
    host:'localhost',
    user: 'root',
    password: 'admin',
    database:'mydatabase',
    promise: true,
});


// app.get('/', (request, reply) => {
//     reply.send({ message: 'Hello, world!' });
// });

// app.route({
//     method: 'GET',
//     url: '/hello/:name',
//     handler: (req, reply) =>{
//         return {
//             message: `Hello ${req.params.name}`
//         }
//     }
// });

app.register(userController, {prefix:'/user'})

try{
    app.listen({port: 3000});
}catch(error){
    app.log.error(error);
    process.exit(1);
}
