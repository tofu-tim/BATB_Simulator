function getRandomTrick(tricks) {
    const randomNum = Math.random();

    let cumulativeProbability = 0;
    for (const [trick, probability] of tricks) {
        cumulativeProbability += probability;

        if (randomNum < cumulativeProbability) {
            return [trick, probability];
        }
    }

    return null;
}

function playSkateSimulator(skater1, skater1Tricks, skater2, skater2Tricks) {
    let skater1Score = 0;
    let skater2Score = 0;
    let offenseSkater = Math.random() < 0.5 ? skater1 : skater2;

    while (skater1Score < 5 && skater2Score < 5) {
        const defenseSkater = offenseSkater === skater1 ? skater2 : skater1;

        // Select a random trick for the skater on offense
        const trick = getRandomTrick(offenseSkater === skater1 ? skater1Tricks : skater2Tricks);

        // Test the probability of landing the trick for the skater on offense
        const isMakeOffense = Math.random() < trick[1];

        // Print the attempt and the result for the skater on offense
        console.log(`${skater1}${offenseSkater === skater1 ? " (offense)" : ""} attempts ${trick[0]}.`);
        console.log(isMakeOffense ? "It's a make!" : "It's a miss!");

        // Test the probability of landing the trick for the skater on defense
        const isMakeDefense = Math.random() < trick[1];

        // Print the attempt and the result for the skater on defense
        console.log(`${skater2}${offenseSkater === skater2 ? " (offense)" : ""} attempts ${trick[0]}.`);
        console.log(isMakeDefense ? "It's a make!" : "It's a miss!");

        // Update scores and set a new trick
        if (!isMakeDefense) {
            console.log(`${defenseSkater}${defenseSkater === skater1 ? " (defense)" : ""} misses the trick.`);
            if (defenseSkater === skater1) {
                skater2Score++;
            } else {
                skater1Score++;
            }
            console.log(`Score: ${skater1}${skater1 === offenseSkater ? " (offense)" : ""}: ${skater1Score} - ${skater2}${skater2 === offenseSkater ? " (offense)" : ""}: ${skater2Score}`);
        }

        // Check if the skater on offense missed the trick
        if (!isMakeOffense) {
            console.log(`${offenseSkater} gives up offense after missing the trick.`);
            offenseSkater = offenseSkater === skater1 ? skater2 : skater1;
        }

        console.log(`${offenseSkater} sets a new trick.`);
    }

    // Determine the winner
    const winner = skater1Score === 5 ? skater2 : skater1;
    console.log(`\nGame over! ${winner} wins the game with a score of ${skater1Score} - ${skater2Score}.`);
}

const skater1 = "Blake Carpenter";
const skater1Tricks = [
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

const skater2 = "Carlos Ribeiro";
const skater2Tricks = [
    ["BacksideBigspin", 0.75],
    ["BigspinKickflip", 0.75],
    ["FakieBigspinHeelflip", 0.75],
    ["HalfcabHeelflip", 0.75],
    ["HalfcabKickflip", 0.75],
    ["NollieBackside180Heelflip", 0.75],
    ["NollieBackside180Kickflip", 0.75],
    ["NollieBigspinKickflip", 0.75],
    ["NollieHardflip", 0.75],
    ["NollieInwardHeelflip", 0.75],
    ["SwitchBacksideBigspin", 0.75],
    ["SwitchBigspinHeelflip", 0.75],
    ["SwitchBigspinKickflip", 0.75],
    ["SwitchFrontside180Heelflip", 0.75],
    ["FakieBigspinKickflip", 0.25],
    ["NollieFrontside180DoubleKickflip", 0.25],
    ["SwitchBackside180Heelflip", 0.25]
];

// Play the game
playSkateSimulator(skater1, skater1Tricks, skater2, skater2Tricks);