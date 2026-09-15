// Import the built-in Node.js http module to create a web server
const http = require('http');

// Define port number for the server to listen on
const PORT = 3000;

// Mock database (JSON-based array storing initial airport staff records)
let staffDatabase = [
  { id: 1, fullName: "Ali Khan", department: "Aviation Operations", employeeId: "EMP-1001" },
  { id: 2, fullName: "Sara Ahmed", department: "Air Traffic Control", employeeId: "EMP-1002" }
];

// Create HTTP server using Node.js http module
const server = http.createServer((req, res) => {
  // Extract URL and HTTP Method from the incoming request object
  const url = req.url;
  const method = req.method;

  // Set default response header for JSON content type
  res.setHeader('Content-Type', 'application/json');

  // Route 1: GET /api/staff - Fetch all staff records (Sending JSON)
  if (url === '/api/staff' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' }); // Status Code: 200 OK
    res.end(JSON.stringify({
      success: true,
      count: staffDatabase.length,
      data: staffDatabase
    }));
  }
  
  // Route 2: POST /api/staff - Add a new staff record (Parsing JSON and Status Codes)
  else if (url === '/api/staff' && method === 'POST') {
    let body = '';

    // Collect incoming data chunks from the request stream
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // Once all data is received, parse and process it
    req.on('end', () => {
      try {
        // Parsing incoming JSON string into JavaScript object
        const parsedData = JSON.parse(body);

        // Validate required fields
        if (!parsedData.fullName || !parsedData.employeeId) {
          res.writeHead(400, { 'Content-Type': 'application/json' }); // Status Code: 400 Bad Request
          res.end(JSON.stringify({ success: false, message: 'Validation Error: fullName and employeeId are required!' }));
          return;
        }

        // Create new record object
        const newRecord = {
          id: staffDatabase.length + 1,
          fullName: parsedData.fullName,
          department: parsedData.department || 'General Administration',
          employeeId: parsedData.employeeId
        };

        // Push new record into mock database array
        staffDatabase.push(newRecord);

        // Send success response with 201 Created status code
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Staff record created successfully!',
          data: newRecord
        }));

      } catch (error) {
        // Handle JSON parsing errors with 400 Bad Request
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Invalid JSON format sent in request body.' }));
      }
    });
  }
  
  // Route 3: Handle 404 Not Found for invalid endpoints
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' }); // Status Code: 404 Not Found
    res.end(JSON.stringify({
      success: false,
      message: 'Endpoint not found. Please use /api/staff with GET or POST methods.'
    }));
  }
});

// Start listening for incoming requests on the specified port
server.listen(PORT, () => {
  console.log(`Server is running successfully at http://localhost:${PORT}`);
});