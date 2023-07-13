let survivorPerks = [
  "Ace In The Hole",
  "Adrenaline",
  "Aftercare",
  "Alert",
  "Any Means Necessary",
  "Autodidact",
  "Babysitter",
  "Balanced Landing",
  "Better Together",
  "Blood Pact",
  "Boil Over",
  "Bond",
  "Borrowed Time",
  "Botany Knowledge",
  "Breakdown",
  "Breakout",
  "Buckle Up",
  "Calm Spirit",
  "Camaraderie",
  "Dance with Me",
  "Dark Sense",
  "Dead Hard",
  "Decisive Strike",
  "Déjà Vu",
  "Deliverance",
  "Detective's Hunch",
  "Distortion",
  "Diversion",
  "Empathy",
  "Fixated",
  "Flip-Flop",
  "For the People",
  "Head On",
  "Hope",
  "Inner Strength",
  "Iron Will",
  "Kindred",
  "Leader",
  "Left Behind",
  "Lightweight",
  "Lithe",
  "Lucky Break",
  "Mettle of Man",
  "No Mither",
  "No One Left Behind",
  "Object of Obsession",
  "Off the Record",
  "Open-Handed",
  "Pharmacy",
  "Plunderer's Instinct",
  "Poised",
  "Premonition",
  "Prove Thyself",
  "Quick & Quiet",
  "Red Herring",
  "Repressed Alliance",
  "Resilience",
  "Saboteur",
  "Second Wind",
  "Self-Care",
  "Slippery Meat",
  "Small Game",
  "Sole Survivor",
  "Solidarity",
  "Soul Guard",
  "Spine Chill",
  "Sprint Burst",
  "Stake Out",
  "Streetwise",
  "Technician",
  "Tenacity",
  "This Is Not Happening",
  "Unbreakable",
  "Up the Ante",
  "Urban Evasion",
  "Vigil",
  "Wake Up!",
  "We'll Make It",
  "We're Gonna Live Forever",
  "Windows of Opportunity",
];

const generateButton = document.querySelector("#generate-button");
const perkElements = document.querySelectorAll(".loadout-item");

function generateRandomPerks() {
  let randomPerks = survivorPerks.slice(); // Create a copy of the perks array

  // Fisher-Yates shuffle algorithm
  for (let i = randomPerks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomPerks[i], randomPerks[j]] = [randomPerks[j], randomPerks[i]];
  }

  // Assign random perks to each <li> element
  perkElements.forEach((perkElement, index) => {
    perkElement.textContent = randomPerks[index];
  });
}

generateButton.addEventListener("click", generateRandomPerks);
