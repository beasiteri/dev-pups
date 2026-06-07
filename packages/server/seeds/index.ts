import { connectDB } from "../db/mongo";
import { seedPuppies } from "./puppies.seed";

async function seedAll() {
  await connectDB();

  await seedPuppies();

  console.log("All seeds done");

  process.exit();
}

seedAll();