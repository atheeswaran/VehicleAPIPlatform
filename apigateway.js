const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.post('/telematicsAnalytics', cors(), express.json(), async (req, res) => {
  try {
    console.log('Received GraphQL request:', req.body);
    const response = await axios.post('http://localhost:3001/graphql', req.body);
    console.log('Response from GraphQL server:', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('Error in GraphQL request:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
  }
});

app.post('/fleetOptimization', cors(), express.json(), async (req, res) => {
  try {
    console.log('Received GraphQL request:', req.body);
    const response = await axios.post('http://localhost:3003/graphql', req.body);
    console.log('Response from GraphQL server:', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('Error in GraphQL request:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
  }
});

app.post('/optimizeRoute', cors(), express.json(), async (req, res) => {
  try {
    console.log('Received GraphQL request:', req.body);
    const response = await axios.post('http://localhost:3004/graphql', req.body);
    console.log('Response from GraphQL server:', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('Error in GraphQL request:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
  }
});


app.post('/safetyAlerts', cors(), express.json(), async (req, res) => {
  try {
    console.log('Received GraphQL request:', req.body);
    const response = await axios.post('http://localhost:3005/graphql', req.body);
    console.log('Response from GraphQL server:', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('Error in GraphQL request:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
  }
});

app.post('/Customers', cors(), express.json(), async (req, res) => {
  try {
    console.log('Received GraphQL request:', req.body);
    const response = await axios.post('http://localhost:3007/graphql', req.body);
    console.log('Response from GraphQL server:', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('Error in GraphQL request:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
  }
});


app.post('/Subscription', cors(), express.json(), async (req, res) => {
  try {
    console.log('Received GraphQL request:', req.body);
    const response = await axios.post('http://localhost:3002/graphql', req.body);
    console.log('Response from GraphQL server:', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('Error in GraphQL request:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
  }
});

// Default route for the root path
app.get('/', (req, res) => {
  res.send('API Gateway is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
