
const userController = (fastify, options, done) => {
    fastify.get('/',(req, reply) => {
        return {
            message: 'Hello World!!'
        };
    });
    done();
};

export default userController;