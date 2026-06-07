import { Puppy } from "../models/Puppy";

export async function seedPuppies() {
  await Puppy.deleteMany({});

  await Puppy.insertMany([
    {
    name: 'Frisket',
    trait: 'Mother of all pups',
    imagePath: '/images/1.jpg',
    },
    {
      name: 'Chase',
      trait: 'Very good boi',
      imagePath: '/images/2.jpg',
    },
    {
      name: 'Leia',
      trait: 'Enjoys naps',
      imagePath: '/images/3.jpg',
    },
    {
      name: 'Pupi',
      trait: 'Loves cheese',
      imagePath: '/images/4.jpg',
    },
    {
      name: 'Russ',
      trait: 'Ready to save the world',
      imagePath: '/images/5.jpg',
    },
    {
      name: 'Yoko',
      trait: 'Ready for anything',
      imagePath: '/images/6.jpg',
    },
  ]);
}