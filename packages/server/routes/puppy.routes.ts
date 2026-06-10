import express from "express";
import { Puppy } from "../models/Puppy";

const router = express.Router();

// GET all puppies
router.get("/", async (req, res) => {
  const puppies = await Puppy.find();
  res.json(puppies);
});

// Like a puppy (adds userId to likedBy)
router.post("/:id/likes", async (req, res) => {
  const puppyId = req.params.id;
  const userId = 1;

  const puppy = await Puppy.findById(puppyId);
  if (!puppy) return res.status(404).json({ message: "Not found" });

  if (!puppy.likedBy.includes(userId)) {
    puppy.likedBy.push(userId);
  }

  await puppy.save();
  res.json({ data: puppy });
});


// Unlike a puppy (removes userId from likedBy)
router.delete("/:id/likes", async (req, res) => {
  const puppyId = req.params.id;
  const userId = 1;

  const puppy = await Puppy.findById(puppyId);
  if (!puppy) return res.status(404).json({ message: "Not found" });

  puppy.likedBy = puppy.likedBy.filter(id => id !== userId);

  await puppy.save();

  res.json({ data: puppy });
});

export default router;