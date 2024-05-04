const express = require('express');
const axios = require('axios');
const cors = require('cors');

const jwt = require('jsonwebtoken'); // Import JWT library
// Hardcoded username and password
const hardcodedUsername = 'admin';
const hardcodedPassword = 'admin';
const ACCESS_TOKEN_SECRET = 'vehicleapiplatform'; // Secret key for JWT token
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Define the protected route handler function
function protectedRouteHandler(req, res) {
  res.send('Protected route');
}
// Apply authenticateToken middleware to protected routes
app.use('/protectedRoute', authenticateToken, protectedRouteHandler);


// Middleware function to authenticate requests using JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  console.log('authHeader:', authHeader);
  const token = authHeader && authHeader.split(' ')[1];
  console.log('authenticateToken token:', token);
  if (token == null) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      // Handle token verification errors
      console.error('JWT verification error:', err);
      if (err.name === 'TokenExpiredError') {
        return res.status(401).send({ error: 'Token expired' });
      }
      return res.sendStatus(403); // Forbidden for other errors
    }
    req.user = user;
    console.log('Decoded user:', req.user); // Logging decoded user data
    next();
  });
}

// Authentication endpoint
app.post('/login', (req, res) => {
  console.log('Received GraphQL request:', req.body);
  const { username, password } = req.body;
  // Check if username and password are correct
  if (username === hardcodedUsername && password === hardcodedPassword) {
    // Generate JWT token
    const accessToken = jwt.sign({ username: username }, ACCESS_TOKEN_SECRET);
    console.log('Response from GraphQL server:', accessToken);
    // Return JWT token as response
    res.json({ token: accessToken });
  } else {
    // If username or password is incorrect, return unauthorized status
    res.status(401).json({ error: 'Unauthorized' });
  }
});

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


app.post('/VehicleSpecs', cors(), express.json(), authenticateToken, async (req, res) => {
  try {
    console.log('Received GraphQL request:', req.body);
    const response = await axios.post('http://localhost:3006/graphql', req.body);
    console.log('Response from GraphQL server:', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('Error in GraphQL request:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
  }
});


app.post('/VehicleInventory', cors(), express.json(), async (req, res) => {
  try {
    console.log('Received GraphQL request:', req.body);
    const response = await axios.post('http://localhost:3008/graphql', req.body);
    console.log('Response from GraphQL server:', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('Error in GraphQL request:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
  }
});

app.post('/Payment', cors(), express.json(), async (req, res) => {
  try {
    console.log('Received GraphQL request:', req.body);
    const response = await axios.post('http://localhost:3009/graphql', req.body);
    console.log('Response from GraphQL server:', response.data);
    res.send(response.data);
  } catch (error) {
    console.error('Error in GraphQL request:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
  }
});

app.post('/EventMesh/Orchestration', cors(), express.json(), async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3021/event', req.body);
    console.log('Response from GraphQL server:', response.data);
    res.status(200).json(response.data);
} catch (error) {
    console.error('Error in forwarding request:', error.message);
    res.status(error.response?.status || 500).json(error.response?.data || 'Internal Server Error');
}
});

app.post('/EventMesh/forwardRequest', cors(), express.json(), async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3020/event', req.body);
        console.log('Response from GraphQL server:', response.data);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error in forwarding request:', error.message);
        res.status(error.response?.status || 500).json(error.response?.data || 'Internal Server Error');
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
