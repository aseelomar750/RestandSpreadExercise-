
function logAnimalSightings (...animals)
{
	console.log(`Animal Sightings: ${animals}`);
}
logAnimalSightings("Elephant", "Rhino", "Tiger");

const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
const mergeHabitat=[...forestHabitats, savannahHabitats];
console.log(`Mergehabits: ${mergeHabitat}`); 


const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
const updatedRhinoStatus = {...rhinoStatus, population: 520,status: "Vulnerable"};

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
const lionGeneticProfile = {...lionProfile, genetics: "Diverse"};
console.log(`Original Lion Profile: ${lionProfile}`);
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.  spread operator creates a shallow copy of the object
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
const updatedEcosystemHealth = {...ecosystemHealth, foodSupply: {...ecosystemHealth.foodSupply, herbivores: "Plentiful"}};
console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Updated Ecosystem Health:", updatedEcosystemHealth);
/*
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.

/*
 * Observations:
 * TODO: Explain here. editing the shallow copy also affects the original object
 */
