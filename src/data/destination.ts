import MoonImg from '../styles/assets/destination/image-moon.webp'
import MarsImg from '../styles/assets/destination/image-mars.webp'
import EuropaImg from '../styles/assets/destination/image-europa.webp'
import TitanImg from '../styles/assets/destination/image-titan.webp'

export const destinationData = {
  moon: {
    name: "Moon",
    image: MoonImg,
    description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
  },
  mars: {
    name: "Mars",
    image: MarsImg,
    description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
  },
  europa: {
    name: "Europa",
    image: EuropaImg, 
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years"
  },
  titan: {
    name: "Titan",
    image: TitanImg,
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
  }
} as const