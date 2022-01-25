const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const { connect } = require('./mongo');
const { ObjectId } = require('mongodb');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());


async function main() {
  const db = await connect();

  app.get('/', (req, res, next) => {
    res.send('Hola, bienvenidos al taller de Node.js');
    console.log(req.query);
  }) // path | endpoint | index | root
  
  app.post('/', (req, res, next) => {
    console.log(req.body); 
    res.send('La petición POST llegó exitosamente');
  })

  app.get('/products', async (req, res, next) => {
    const products = await db.collection('products').find({}).toArray();
    res.json(products);
  })

  app.post('/products', async (req, res, next) => {
    const newProduct = req.body;
    await db.collection('products').insertOne(newProduct);
    res.status(201).json({ status: 'success', data: newProduct });
  })

  app.put('/products/:productId', async (req, res, next) => {
    const productId = req.params.productId;
    const updateProduct = req.body;
    await db.collection('products').updateOne({
      _id: ObjectId(productId)
    }, {
      $set: {
        ...updateProduct
      }
    })
    res.status(200).json({ status: 'success', data: updateProduct });
  })

  app.listen(PORT, () => {
    console.log('Server listening in port ' + PORT);
  })
}

main();