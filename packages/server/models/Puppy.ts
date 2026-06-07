import mongoose from "mongoose";

export interface IPuppy {
  name: string;
  trait: string;
  imagePath: string;
}

const PuppySchema = new mongoose.Schema<IPuppy>({
  name: String,
  trait: String,
  imagePath: String,
});

export const Puppy = mongoose.model("Puppy", PuppySchema);