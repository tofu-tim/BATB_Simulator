// BATB 12 game of S.K.A.T.E. simulator

// List of skateboarders, their tricks, and the consistency with which they land these tricks.
const skateboarders = [{
        name: 'Danny Montoya',
        tricks: [
            ['Nollie fs 180 heelflip', 0.5],
            ['Hardflip', 0.6],
            ['Kickflip', 0.99],
            ['Switch Kickflip', 0.9],
            ['360 kickflip', 0.95],
            ['Nollie kickflip', 0.8],
            ['Frontside 180 kickflip', 0.5],
            ['Switch frontside 180 kickflip', 0.5],
            ['Nollie backside 180 kickflip', 0.4],
            ['Nollie Inward Heelflip', 0.4],
            ['Backside 180 kickflip', 0.8],
            ['Fakie 360 kickflip', 0.2],
            ['Switch Varial Heelflip', 0.25],
            ['Nollie Inward Heelflip', 0.62],
            ['Switch Frontside Bigspin', 0.6],
            ['Nollie Heelflip', 0.6],
            ['Switch Frontside 360', 0.4],
            ['Nollie Heelflip', 0.2],
            ['Switch 360 Kickflip', 0.3],
            ['Backslide Bigspin', 0.9]
        ]
    },
    {
        name: 'Erik Ellington',
        tricks: [
            ['Nollie fs 180 heelflip', 0.9],
            ['Hardflip', 0.8],
            ['Kickflip', 0.99],
            ['Switch Kickflip', 0.9],
            ['360 kickflip', 0.95],
            ['Nollie kickflip', 0.8],
            ['Frontside 180 kickflip', 0.9],
            ['Switch frontside 180 kickflip', 0.6],
            ['Nollie backside 180 kickflip', 0.7],
            ['Nollie Inward Heelflip', 0.65],
            ['Backside 180 kickflip', 0.9],
            ['Nollie backside 180 kickflip', 0.5],
            ['Fakie 360 kickflip', 0.4],
            ['Nollie backside 180 kickflip', 0.8],
            ['Switch Varial Heelflip', 0.35],
            ['Nollie Inward Heelflip', 0.9],
            ['Switch Frontside Bigspin', 0.6],
            ['Nollie Heelflip', 0.95],
            ['Switch Frontside 360', 0.5],
            ['Nollie Heelflip', 0.9],
            ['Switch 360 Kickflip', 0.6],
            ['Backslide Bigspin', 0.96]
        ]
    }
];

function roShamBo(skater1, skater2) {
    const choices = ['rock', 'paper', 'scissors'];
    var skater1Choice = choices[Math.floor(Math.random() * choices.length)];
    var skater2Choice = choices[Math.floor(Math.random() * choices.length)];

    while (skater1Choice === skater2Choice) {
        console.log(`${skater1} throws ${skater1Choice}.`);
        console.log(`${skater2} throws ${skater2Choice}.`);
        console.log("It's a tie. Go again.");

        skater1Choice = choices[Math.floor(Math.random() * choices.length)];
        skater2Choice = choices[Math.floor(Math.random() * choices.length)];
    }

    console.log(`${skater1} throws ${skater1Choice}.`);
    console.log(`${skater2} throws ${skater2Choice}.`);

    if (
        (skater1Choice === 'rock' && skater2Choice === 'scissors') ||
        (skater1Choice === 'paper' && skater2Choice === 'rock') ||
        (skater1Choice === 'scissors' && skater2Choice === 'paper')
    ) {
        console.log(`${skater1} goes first.`);
        return skater1;
    } else {
        console.log(`${skater2} goes first.`);
        return skater2;
    }
}

function gameOfSkate() {
    let score1 = 0;
    let score2 = 0;
    let currentSkater = roShamBo(skateboarders[0].name, skateboarders[1].name);

    while (score1 < 5 && score2 < 5) {
        const currentSkaterObject = skateboarders[currentSkater];
        const opponent = currentSkater === 0 ? 1 : 0;

        if (currentSkaterObject && currentSkaterObject.tricks) {
            const tricks = currentSkaterObject.tricks;
            const trickNames = Object.keys(tricks);

            if (trickNames.length === 0) {
                console.log(`No more available tricks for ${currentSkaterObject.name}.`);
                currentSkater = opponent;
                continue;
            }

            const trickIndex = Math.floor(Math.random() * trickNames.length);
            const trickName = trickNames[trickIndex];
            const consistency = tricks[trickName];

            console.log(`${currentSkaterObject.name}: tries ${trickName}.`);

            if (Math.random() <= consistency) {
                console.log(`Make! ${currentSkaterObject.name} lands ${trickName}.`);
                currentSkater === 0 ? (score1 += 1) : (score2 += 1);
                delete tricks[trickName]; // Remove the landed trick

                if (currentSkater === 0) {
                    console.log(`${skateboarders[opponent].name}: tries ${trickName}.`);
                    if (Math.random() <= tricks[trickName]) {
                        console.log(`Make! ${skateboarders[opponent].name} lands ${trickName}.`);
                        currentSkater = opponent;
                        delete tricks[trickName];
                    } else {
                        console.log(`Miss! ${skateboarders[opponent].name} fails to land ${trickName}. New score: ${score1} - ${score2}.`);
                    }
                }
            } else {
                console.log(`Miss! ${currentSkaterObject.name} fails to land ${trickName}.`);

                if (currentSkater === 0) {
                    console.log(`${skateboarders[opponent].name}: tries ${trickName}.`);
                    if (Math.random() <= tricks[trickName]) {
                        console.log(`Make! ${skateboarders[opponent].name} lands ${trickName}.`);
                        currentSkater = opponent;
                        delete tricks[trickName];
                    } else {
                        console.log(`Miss! ${skateboarders[opponent].name} fails to land ${trickName}. New score: ${score1} - ${score2}.`);
                    }
                } else {
                    console.log(`${skateboarders[opponent].name}: sets a new trick.`);
                }
            }
        } else {
            console.log('Invalid skater or missing tricks.');
        }
    }

    const winner = score1 === 5 ? skateboarders[0] : skateboarders[1];
    console.log(`\n${winner.name} wins the game.`);
}

// Run the game
gameOfSkate();