const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product'); // Assure-toi que ce chemin est correct

// Configuration de l'application Express
const app = express();
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/products_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Définir une route pour la racine
app.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    let productList = '<h1>Mitate no Gokui</h1>';
    productList += '<ul>';
    products.forEach(product => {
      productList += `<li>${product.name} - $${product.price}</li>`;
    });
    productList += '</ul>';
    res.send(productList);
  } catch (error) {
    res.status(500).send('<h1>Error retrieving products</h1>');
  }
});

// Définir les routes de l'API
const productRoutes = require('./routes/productRoutes'); // Assure-toi que ce chemin est correct
app.use('/api/products', productRoutes);

// Démarrer le serveur Express
const PORT = 5009;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
