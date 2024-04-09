import express from 'express';

const app = express();
const port = 3000;

// Middleware to use status(200).json data
app.use(express.json());

// GET route
app.get('/', (req, res) =>
{
    console.log("gt requested received")
    res.status(200).send('GET request');
});

// POST route
app.post('/', (req, res) =>
{
    console.log("post request received")
    resp.status(200).send('POST request');
});

// PUT route
app.put('/', (req, resp) =>
{
    console.log("put request received")
    res.status(200).send('PUT request');
});

// DELETE route
app.delete('/', (req, resp) =>
{
    console.log("delete request received")
    res.status(200).send('DELETE request');
});



// GET route with a single parameter
app.get('/api/users/:id', (req, res) =>
{
    console.log("get request for user with ID")
    const userId = req.params.id;
    res.status(200).send(`GET request for user with ID: ${userId}`);

});

// GET route with multiple parameters
app.get('/api/users/:category/:id', (req, res) =>
{
    console.log("get request for product with ID in category")
    const category = req.params.category;
    const productId = req.params.id;
    res.status(200).send(`GET request for product in category: ${category} with ID: ${productId}`);
});

// POST route with a single parameter
app.post('/api/users/:id', (req, res) =>
{
    console.log("put request for product with ID in category")
    const category = req.params.category;
    const productId = req.params.id;
    res.status(200).send(`PUT request for product in category: ${category} with ID: ${productId}`);
});

// PUT route with a single parameter
app.put('/api/products/:category/:id', (req,res) =>
{
    console.log("put request for product with ID in category")
    const category = req.params.category;
    const productId = req.params.id;
    res.status(200).send(`PUT request for product in category: ${category} with ID: ${productId}`);
});

// DELETE route with a single parameter
app.delete('/api/users/:id', (req, res) =>
{
    console.log("delete request for user with ID")
    const userId = req.params.id;
    res.status(200).send(`DELETE request for user with ID: ${userId}`);
});



// GET route that returns status(200).JSON data
app.get('/api/users', (req, res) =>
{
    console.log("get request for users with status(200).JSON data")
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'JANE' },
        { id: 3, name: 'Bob' }
    ];
    res.status(200).json(users);
});

// POST route that recveives status(200).JSON data
app.post('/api/users', (req, res) => 
{
    console.log("post request for user with status(200).JSON data")
    const newUser = req.body;
    console.log(newUser);
    res.status(200).json({'message': 'User created'});
});


app.listen(port, () =>
{
    console.log(`Server running on http://localhost:${port}/`);
});
