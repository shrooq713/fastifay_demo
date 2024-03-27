const responseSchema = {
    response: {
        200: {
            properties: {
                message: { type: 'string' },
            },
        }
    }
};
const postSchema = {
    body:{
        properties: {
            user:{ type: 'object'}
        },
        required: ['user']
    },
    response: {
        200: {
            status: {type: 'number' },
        }
    }
};
const userController = (fastify, options, done) => {
    fastify.get('/users', async(req, reply) => {
        try{
            const [user] = await fastify.mysql.execute('select * from user;');
            console.log(user);
            return {user};
        }catch (error){
            return error;
        }
        
    });

    fastify.post('/create', {schema: postSchema},async(req, reply) => {
        const {user} = req.body;
        try{
            await fastify.mysql.execute('INSERT INTO user (name, email) VALUES(?,?)', [user.name, user.email]);
            return {status: 200};
        }catch (error){
            return error;
        }
    });
    done();
};

export default userController;