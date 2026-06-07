import { Puppy } from "../models/Puppy";

export async function seedPuppies() {
  await Puppy.deleteMany({});

  await Puppy.insertMany([
    {
      name: 'Milo',
      trait: 'Professional nap enthusiast',
      imagePath: '/images/1.jpg',
    },
    {
      name: 'Nova',
      trait: 'Zoomies specialist',
      imagePath: '/images/2.jpg',
    },
    {
      name: 'Bruno',
      trait: 'Guardian of snacks',
      imagePath: '/images/3.jpg',
    },
    {
      name: 'Luna',
      trait: 'Moonlight dreamer',
      imagePath: '/images/4.jpg',
    },
    {
      name: 'Baxter',
      trait: 'Chief toy destroyer',
      imagePath: '/images/5.jpg',
    },
    {
      name: 'Ziggy',
      trait: 'Chaos engineer',
      imagePath: '/images/6.jpg',
    },
  ]);
}