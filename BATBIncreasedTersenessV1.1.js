const carlosRibeiroTricks = [
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

const blakeCarpenterTricks = [
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

const skater1Name = 'Blake Carpenter';
let skater1Score = 0;
let skater1OnOffense = true;
let skater1Trick = '';

const skater2Name = 'Carlos Ribeiro';
let skater2Score = 0;
let skater2Trick = '';

function selectRandomTrick(skater) {
    let trickArray;
    let score;

    if (skater === skater1Name) {
        trickArray = blakeCarpenterTricks;
        score = skater1Score;
    } else if (skater === skater2Name) {
        trickArray = carlosRibeiroTricks;
        score = skater2Score;
    } else {
        return "Invalid skater name";
    }

    const randomIndex = Math.floor(Math.random() * trickArray.length);
    const selectedTrick = trickArray[randomIndex][0];
    const probability = trickArray[randomIndex][1];
    const trickResult = Math.random() <= probability ? 'made' : 'missed';

    return {
        trickResult,
        trickName: selectedTrick,
        score,
    };
}

function printScore() {
    console.log(`${skater1Name} Score: ${skater1Score}`);
    console.log(`${skater2Name} Score: ${skater2Score}`);
}

while (skater1Score < 5 && skater2Score < 5) {
    if (skater1OnOffense) {
        const trickOutcome = selectRandomTrick(skater1Name);
        skater1Trick = trickOutcome.trickName;

        console.log(`${skater1Name} attempts ${skater1Trick}.`);
        console.log(`Result: ${trickOutcome.trickResult}`)

        if (trickOutcome.trickResult === 'missed') {
            skater1OnOffense = false;
            skater2Trick = selectRandomTrick(skater2Name).trickName;
            console.log(`${skater1Name} missed the trick.`);
            console.log(`${skater2Name} is now on offense`)
        }
    } else {
        const trickOutcome = selectRandomTrick(skater2Name);
        skater2Trick = trickOutcome.trickName;

        console.log(`${skater2Name} attempts ${skater2Trick} and ${trickOutcome.trickResult}s.`);

        if (trickOutcome.trickResult === 'missed') {
            skater1OnOffense = true;
            skater2Score += 1;
            console.log(`${skater2Name} missed the trick.`);
            console.log(`${skater1Name} is now on offense`)
            printScore();
        }
    }
}

const winner = skater1Score === 5 ? skater1Name : skater2Name;
console.log(`The winner is ${winner}!`);