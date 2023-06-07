// BATB 12 game of S.K.A.T.E. simulator

// List of skateboarders, their tricks, and the consistency with witch they land these tricks.
const skateboarders = [{
        name: 'Danny Montoya',
        tricks: {
            'Nollie fs 180 heelflip': 0.75,
            'Hardflip': .6,
            'Kickflip': 0.99,
            'Switch Kickflip': 0.9,
            '360 kickflip': 0.95,
            'Nollie kickflip': 0.8,
            'Fronstide 180 kickflip': .90,
            'Switch frontside 180 kickflip': 0.5,
            'Nollie backside 180 kickflip': 0.4,
            'Nollie Inward Heelflip': 0.75,
            'Backside 180 kickflip': 0.80 'Nollie backside 180 kickflip': 0.6,
            'Fakie 360 kickflip': 0.77,
            'Nollie backside 180 kickflip': 0.4,
            'Switch Varial Heelflip': 0.25,
            'Nollie Inward Heelflip': 0.62,
            'Switch Frontside Bigspin': 0.60,
            'Switch frontside bigspin': 0.50,
            'Nollie Heelflip': 0.85,
            'Switch Frontside 360': 0.40,
            'Nollie Heelflip': 0.75,
            'Switch 360 Kickflip': 0.30,
            'Backslide Bigspin': 0.90
        }
    },
    {
        name: 'Erik Ellington',
        tricks: [
            ['Nollie fs 180 heelflip', 0.90],
            ['Hardflip', .8],
            ['Kickflip', 0.99],
            ['Switch Kickflip', 0.9],
            ['360 kickflip', 0.95],
            ['Nollie kickflip', 0.8],
            ['Fronstide 180 kickflip', .90],
            ['Switch frontside 180 kickflip', 0.6],
            ['Nollie backside 180 kickflip', 0.7],
            ['Nollie Inward Heelflip', 0.65],
            ['Backside 180 kickflip', 0.90],
            ['Nollie backside 180 kickflip', 0.5],
            ['Fakie 360 kickflip', 0.40],
            ['Nollie backside 180 kickflip', 0.8],
            ['Switch Varial Heelflip', 0.35],
            ['Nollie Inward Heelflip', 0.90],
            ['Switch Frontside Bigspin', 0.60],
            ['Switch frontside bigspin', 0.70],
            ['Nollie Heelflip', 0.95],
            ['Switch Frontside 360', 0.50],
            ['Nollie Heelflip', 0.90],
            ['Switch 360 Kickflip', 0.60],
            ['Backslide Bigspin', 0.96]
        ]
    }
];

function roShamBo(skater1, skater2) {
    const choices = ['rock', 'paper', 'scissors'];
    var skater1Choice = choices[Math.floor(Math.random() * choices.length)];
    var skater2Choice = choices[Math.floor(Math.random() * choices.length)];

    while (skater1Choice === skater2Choice) {
        console.log(skater1 + ' throws ' + skater1Choice + '.');
        console.log(skater2 + ' throws ' + skater2Choice + '.');
        console.log("It's a tie. Go again.");

        skater1Choice = choices[Math.floor(Math.random() * choices.length)];
        skater2Choice = choices[Math.floor(Math.random() * choices.length)];
    }

    console.log(skater1 + ' throws ' + skater1Choice + '.');
    console.log(skater2 + ' throws ' + skater2Choice + '.');

    if (
        (skater1Choice === 'rock' && skater2Choice === 'scissors') ||
        (skater1Choice === 'paper' && skater2Choice === 'rock') ||
        (skater1Choice === 'scissors' && skater2Choice === 'paper')
    ) {
        console.log(skater1 + ' goes first.');
        var winner = skater1;
    } else {
        console.log(skater2 + ' goes first.');
        var winner = skater2;
    }
}

function gameOfSkate() {
    let score1 = 0;
    let score2 = 0;
    let currentSkater = 0;

    while (score1 < 5 && score2 < 5) {
        const currentSkaterObject = skateboarders[currentSkater];
        const opponent = currentSkater === 0 ? 1 : 0;
        const trickNames = Object.keys(currentSkaterObject.tricks);
        const trickIndex = Math.floor(Math.random() * trickNames.length);
        const trickName = trickNames[trickIndex];

        console.log("${currentSkaterObject.name}'s turn: ${trickName}");

        const consistency = Math.random();
        if (consistency <= currentSkaterObject.tricks[trickName]) {
            console.log('Make.');
            currentSkater === 0 ? (score1 += 1) : (score2 += 1);
        } else {
            console.log("Score: ${skateboarders[0].name}: ${score1}, ${skateboarders[1].name}: ${score2}");

            currentSkater = opponent;
        }

        const winner = score1 === 5 ? skateboarders[0] : skateboarders[1]:
            console.log("\n${winner.name} wins the game"):
    }
}