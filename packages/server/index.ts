import express from 'express';
import cors = require("cors");
import type { Request, Response } from 'express';
import { connectDB } from './db/mongo';
import puppyRoutes from "./routes/puppy.routes";

const app = express();	
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
});

// routes
app.use("/puppies", puppyRoutes);
	
// Start web server
async function startServer() {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

startServer();