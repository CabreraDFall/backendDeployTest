const express = require('express');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const path = require('path');
const products = require('./api/products');
const users = require('./api/users');
const general = require('./api/general');
const app = express();
const port = process.env.PORT || 3001;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/products', products);
app.get('/users', users);
app.get('/general', general);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
