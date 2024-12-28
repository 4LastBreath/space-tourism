import commanderImg from '../styles/assets/crew/image-douglas-hurley.webp'
import specialistImg from '../styles/assets/crew/image-mark-shuttleworth.webp'
import pilotImg from '../styles/assets/crew/image-victor-glover.webp'
import engineerImg from '../styles/assets/crew/image-anousheh-ansari.webp'

export const crewData = {
  commander: {
    name: "Douglas Hurley",
    image: commanderImg,
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  specialist: {
    name: "Mark Shuttleworth",
    image: specialistImg,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  pilot: {
    name: "Victor Glover",
    image: pilotImg,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  engineer: {
    name: "Anousheh Ansari",
    image: engineerImg,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
} as const