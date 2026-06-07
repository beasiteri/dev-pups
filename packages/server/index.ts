import express from 'express';
import type { Request, Response } from 'express';
import { connectDB } from './db/mongo';

const app = express();	
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
});
	
// Start web server
async function startServer() {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

startServer();