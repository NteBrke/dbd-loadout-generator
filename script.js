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

let killerPerks = [
  "A Nurse's Calling",
  "Agitation",
  "Bamboozle",
  "Barbecue & Chili",
  "Beast of Prey",
  "Bitter Murmur",
  "Blood Echo",
  "Blood Warden",
  "Bloodhound",
  "Brutal Strength",
  "Corrupt Intervention",
  "Coulrophobia",
  "Cruel Limits",
  "Dark Devotion",
  "Dead Man's Switch",
  "Deathbound",
  "Deerstalker",
  "Hex: Devour Hope",
  "Discordance",
  "Distressing",
  "Dying Light",
  "Enduring",
  "Fire Up",
  "Forced Penance",
  "Franklin's Demise",
  "Furtive Chase",
  "Gearhead",
  "Hangman's Trick",
  "Hex: Haunted Ground",
  "Hex: Huntress Lullaby",
  "I'm All Ears",
  "Infectious Fright",
  "Insidious",
  "Iron Grasp",
  "Iron Maiden",
  "Knock Out",
  "Lightborn",
  "Mad Grit",
  "Make Your Choice",
  "Mindbreaker",
  "Monitor & Abuse",
  "Monstrous Shrine",
  "Nemesis",
  "Hex: No One Escapes Death",
  "Overcharge",
  "Overwhelming Presence",
  "Play with Your Food",
  "Pop Goes the Weasel",
  "Predator",
  "Rancor",
  "Remember Me",
  "Hex: Retribution",
  "Hex: Ruin",
  "Save the Best for Last",
  "Shadowborn",
  "Sloppy Butcher",
  "Spies from the Shadows",
  "Spirit Fury",
  "Stridor",
  "Surge",
  "Surveillance",
  "Territorial Imperative",
  "Thanatophobia",
  "Hex: The Third Seal",
  "Hex: Thrill of the Hunt",
  "Thrilling Tremors",
  "Tinkerer",
  "Trail of Torment",
  "Unnerving Presence",
  "Unrelenting",
  "Whispers",
  "Zanshin Tactics",
];

const survivorButton = document.querySelector("#survivor-button");
const killerButton = document.querySelector("#killer-button");
const perkElements = document.querySelectorAll(".loadout-item");

function generateRandomSurvivorPerks() {
  let randomPerks = survivorPerks.slice(); // Create a copy of the perks array

  // Fisher-Yates shuffle algorithm
  for (let i = randomPerks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomPerks[i], randomPerks[j]] = [randomPerks[j], randomPerks[i]];
  }

  // Assign random perks to each <li> element
  const perkElements = document.querySelectorAll(
    ".survivor-perks .loadout-item"
  );
  perkElements.forEach((perkElement, index) => {
    perkElement.textContent = randomPerks[index];
  });
}

function generateRandomKillerPerks() {
  let randomPerks = killerPerks.slice(); // Create a copy of the perks array

  for (let i = randomPerks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomPerks[i], randomPerks[j]] = [randomPerks[j], randomPerks[i]];
  }

  // Assign random perks to each <li> element
  const perkElements = document.querySelectorAll(".killer-perks .loadout-item");
  perkElements.forEach((perkElement, index) => {
    perkElement.textContent = randomPerks[index];
  });
}

survivorButton.addEventListener("click", generateRandomSurvivorPerks);
killerButton.addEventListener("click", generateRandomKillerPerks);
