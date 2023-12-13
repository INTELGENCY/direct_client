const getpath = (name) => {
  return `/assets/iconify/${name}.svg`;
};

var subCategories = [
  "CPEC",
  "Robotics",
  "AI & Machine Learning",
  "Data Management",
  "Nano Technology",
  "Thermodynamics",
  "Cryptography & Cyber Security",
  "Networks & Network Security",
  "Software",
  "Geoinformatics",
  "Robotics",
  "Disaster Management",
  "Environment & Climate Change",
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
  "Neuro Sciences & Neuroinformatics",
  "Aerodynamics",
  "Health",
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
  "Image, Video & Signal Processing",
  "IoT",
  "Modulation & Simulation",
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
