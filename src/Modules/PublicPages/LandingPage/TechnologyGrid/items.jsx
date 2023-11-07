const getpath = (name) => {
  return `/assets/iconify/${name}.svg`;
};

var subCategories = [
  "Disaster Management",
  "Environment & Climate Change",
  "Geoinformatics",
  "Marine Life",
  "Infrastructure",
  "Transportation",
  "Urban Development",
  "Crime Prevention",
  "Water & Sanitation",
  "Bio Energy",
  "Energy Management",
  "Energy Storage",
  "Hydro Energy",
  "PV Technology",
  "Thermal Energy",
  "Wind Energy",
  "Agriculture and Food Security",
  "Bio Medical",
  "Biotechnology",
  "Health",
  "Neuro Sciences & Neuroinformatics",
  "Aerodynamics",
  "Avionics",
  "Space Technology",
  "Automotive",
  "Chemical",
  "Materials",
  "Metallurgy",
  "Minning",
  "Petroleum",
  "Polymers",
  "Fluid Dynamics",
  "Manufacturing",
  "Mechanics",
  "Robotics",
  "Thermodynamics",
  "Nano Technology",
  "CPEC",
  "Economics",
  "Human Resource Management",
  "Entrepreneurship",
  "Education",
  "Engineering Management",
  "Finance",
  "Hospitality",
  "Logistic & Supply Chain Management",
  "Marketing",
  "Operations Management",
  "Social Sciences and Humanities",
  "Mathematics",
  "Physics",
  "AI & Machine Learning",
  "Cryptography & Cyber Security",
  "Data Management",
  "Image, Video & Signal Processing",
  "IoT",
  "Modulation & Simulation",
  "Networks & Network Security",
  "Software",
  "Control",
  "Electronics",
  "Ics & Devices",
  "Power Electronics",
  "RF, Microwave & Telecom",
  "ERASMUS MUNDAS, USPCAS-E, INTACT",
];

function getRandomNumber() {
  return Math.floor(Math.random() * subCategories.length); // Modify as needed
}

function updateArrayWithObject() {
  var updatedArray = [];
  subCategories.forEach(function (element) {
    const name = String(element).toLowerCase().split(" ");
    const n1 = name.join("");
    updatedArray.push({
      image: getpath(n1),
      name: element, // Set the name field to the sub-category
      industry: getRandomNumber(),
      academia: getRandomNumber(),
      experts: getRandomNumber(),
      data: "rest", // You can modify this as needed
    });
  });
  return updatedArray;
}

export const items = updateArrayWithObject();

// Now, you have all the sub-categories in the 'subCategories' array.
