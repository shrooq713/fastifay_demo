import fastify from 'fastify';
import userController from './user-controller.js';

const app = fastify({
    logger: true
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
