const responseSchema = {
    response: {
        200: {
            properties: {
                message: { type: 'string' },
            },
        }
    }

};
const userController = (fastify, options, done) => {
    fastify.get('/', {schema: responseSchema},(req, reply) => {
        return {
            message: 'Hello World!!'
        };
    });

    fastify.get('/hello/:name', {},(req, reply) => {
        return {
            message: `Hello ${req.parameter.name}!`
        };
    });
    done();
};

export default userController;