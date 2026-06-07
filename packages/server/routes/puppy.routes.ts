import express from "express";
import { Puppy } from "../models/Puppy";

const router = express.Router();

// GET all puppies
router.get("/", async (req, res) => {
  const puppies = await Puppy.find();
  res.json(puppies);
});

export default router;