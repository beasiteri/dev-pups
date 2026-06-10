import mongoose from "mongoose";

export interface IPuppy {
  name: string;
  trait: string;
  imagePath: string;
  likedBy: number[];
}

const PuppySchema = new mongoose.Schema<IPuppy>({
  name: String,
  trait: String,
  imagePath: String,
  likedBy: {
    type: [Number],
    default: []
  }
});

export const Puppy = mongoose.model("Puppy", PuppySchema);