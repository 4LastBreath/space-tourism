import vehiclePortraitImg from '../styles/assets/technology/image-launch-vehicle-portrait.jpg'
import vehicleLandScapeImg from '../styles/assets/technology/image-launch-vehicle-landscape.jpg'
import spaceportPortraitImg from '../styles/assets/technology/image-spaceport-portrait.jpg'
import spaceportLandScapeImg from '../styles/assets/technology/image-spaceport-landscape.jpg'
import capsulePortraitImg from '../styles/assets/technology/image-space-capsule-portrait.jpg'
import capsuleLandScapeImg from '../styles/assets/technology/image-space-capsule-landscape.jpg'


export const technologyData = {
  vehicle: {
    name: "Launch vehicle",
    images: {
      portrait: vehiclePortraitImg,
      landscape: vehicleLandScapeImg
    },
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  spaceport: {
    name: "Spaceport",
    images: {
      portrait: spaceportPortraitImg,
      landscape: spaceportLandScapeImg
    },
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  capsule: {
    name: "Space capsule",
    images: {
      portrait: capsulePortraitImg,
      landscape: capsuleLandScapeImg
    },
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
} as const