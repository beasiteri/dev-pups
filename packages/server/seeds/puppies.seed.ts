import { Puppy } from "../models/Puppy";

export async function seedPuppies() {
  await Puppy.deleteMany({});

  await Puppy.insertMany([
    {
      name: 'Milo',
      trait: 'Professional nap enthusiast',
      imagePath: '/images/1.jpg',
      likedBy: [],
    },
    {
      name: 'Nova',
      trait: 'Zoomies specialist',
      imagePath: '/images/2.jpg',
      likedBy: [],
    },
    {
      name: 'Bruno',
      trait: 'Guardian of snacks',
      imagePath: '/images/3.jpg',
      likedBy: [],
    },
    {
      name: 'Luna',
      trait: 'Moonlight dreamer',
      imagePath: '/images/4.jpg',
      likedBy: [],
    },
    {
      name: 'Baxter',
      trait: 'Chief toy destroyer',
      imagePath: '/images/5.jpg',
      likedBy: [],
    },
    {
      name: 'Ziggy',
      trait: 'Chaos engineer',
      imagePath: '/images/6.jpg',
      likedBy: [],
    },
  ]);
}