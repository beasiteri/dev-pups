import express from "express";
import { Puppy } from "../models/Puppy";

const router = express.Router();

// GET all puppies
router.get("/", async (req, res) => {
  const puppies = await Puppy.find();
  res.json(puppies);
});

router.patch("/:id/like", async (req, res) => {
  const puppyId = req.params.id;
  const userId = 1;

  const puppy = await Puppy.findById(puppyId);
  if (!puppy) return res.status(404).json({ message: "Not found" });

  const alreadyLiked = puppy.likedBy.includes(userId);

  if (alreadyLiked) {
    puppy.likedBy = puppy.likedBy.filter(id => id !== userId);
  } else {
    puppy.likedBy.push(userId);
  }

  await puppy.save();

  res.json({ data: puppy });
});

export default router;