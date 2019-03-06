const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening to port: 4000');
    console.log('Application: http://localhost:4000/graphql')
});
