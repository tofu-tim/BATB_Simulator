var skaterName = 'Blake Carpenter';
const blakeCarpenter = [
    ["FakieHeelflip", 0.75],
    ["FakieKickflip", 0.75],
    ["Frontside180Kickflip", 0.75],
    ["FrontsideBigspin", 0.75],
    ["FrontsideHalfcabKickflip", 0.75],
    ["FrontsideShuvit", 0.75],
    ["Hardflip", 0.75],
    ["Kickflip", 0.75],
    ["NollieFrontside180Heelflip", 0.75],
    ["NollieFrontside180Kickflip", 0.75],
    ["NollieHeelflip", 0.75],
    ["NollieKickflip", 0.75],
    ["Switch360Flip", 0.75],
    ["SwitchFrontsideBigspin", 0.75],
    ["SwitchFrontsideShuvit", 0.75],
    ["SwitchHeelflip", 0.75],
    ["SwitchKickflip", 0.75],
    ["SwitchShuvit", 0.75],
    ["FakieBigspin", 0.25],
    ["FakieHardflip", 0.25],
    ["SwitchBackside180Kickflip", 0.25],
    ["SwitchFrontside180Kickflip", 0.25],
    ["SwitchVarialHeelflip", 0.25]
];

function selectRandomTrick() {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * blakeCarpenter.length);

    // Get the random array using the random index
    const selectedTrick = blakeCarpenter[randomIndex];

    // Print the trick name at index 0
    console.log(skaterName + ' attempts:');
    console.log(selectedTrick[0]);

    // Determine if the trick is true based on the probability at index 1
    const isTrue = Math.random() <= selectedTrick[1];

    // Remove the selected array from the parent array
    blakeCarpenter.splice(randomIndex, 1);

    // Return the result
    return isTrue ? 'make' : 'miss';
}

// Example usage
const trickResult = selectRandomTrick();

console.log("Result: ", trickResult);