const skateboarders = [{
        name: 'Danny Montoya',
        tricks: [
            ['Nollie fs 180 heelflip', 0.5],
            ['Kickflip', 0.8],
            ['360 kickflip', 0.95],
            ['Nollie kickflip', 0.8],
            ['Switch frontside 180 kickflip', 0.5],
            ['Nollie backside 180 kickflip', 0.4],
            ['Backside 180 kickflip', 0.8],
            ['Nollie Inward Heelflip', 0.4],
            ['Fakie 360 kickflip', 0.2],
            ['Switch Varial Heelflip', 0.25],
        ]
    },
    {
        name: 'Erik Ellington',
        tricks: [
            ['Nollie fs 180 heelflip', 0.9],
            ['Kickflip', 0.99],
            ['360 kickflip', 0.95],
            ['Nollie kickflip', 0.8],
            ['Switch frontside 180 kickflip', 0.6],
            ['Nollie backside 180 kickflip', 0.7],
            ['Backside 180 kickflip', 0.9],
            ['Nollie Inward Heelflip', 0.65],
            ['Fakie 360 kickflip', 0.4],
            ['Switch Varial Heelflip', 0.35],
        ]
    }
];

function roShamBo(skater1, skater2) {
    const choices = ['rock', 'paper', 'scissors'];
    let skater1Choice, skater2Choice;

    do {
        skater1Choice = choices[Math.floor(Math.random() * choices.length)];
        skater2Choice = choices[Math.floor(Math.random() * choices.length)];
    } while (skater1Choice === skater2Choice);

    return skater1Choice === 'rock' && skater2Choice === 'scissors' ? skater1 : skater2;
}

function gameOfSkate() {
    let score1 = 0;
    let score2 = 0;
    let currentSkater = roShamBo(skateboarders[0].name, skateboarders[1].name);

    while (score1 < 5 && score2 < 5) {
        const [current, opponent] = [skateboarders[currentSkater], currentSkater === 0 ? 1 : 0];
        const tricks = current.tricks;

        if (tricks.length === 0) {
            console.log(`No more available tricks for ${current.name}.`);
            currentSkater = opponent;
            continue;
        }

        const randomIndex = Math.floor(Math.random() * tricks.length);
        const [trickName, consistency] = tricks[randomIndex];

        console.log(`${current.name}: tries ${trickName}.`);

        if (Math.random() <= consistency) {
            console.log(`Make! ${current.name} lands ${trickName}.`);
            currentSkater === 0 ? score1++ : score2++;

            if (currentSkater === 0 && Math.random() <= consistency) {
                console.log(`${skateboarders[opponent].name}: tries ${trickName}.`);
                console.log(`Make! ${skateboarders[opponent].name} lands ${trickName}.`);
                tricks.splice(randomIndex, 1);
                currentSkater = opponent;
            } else {
                console.log(`Miss! ${skateboarders[opponent].name} fails to land ${trickName}. New score: ${score1} - ${score2}.`);
            }
        } else {
            console.log(`Miss! ${current.name} fails to land ${trickName}.`);

            if (currentSkater === 0) {
                console.log(`${skateboarders[opponent].name}: tries ${trickName}.`);
                if (Math.random() <= consistency) {
                    console.log(`Make! ${skateboarders[opponent].name} lands ${trickName}.`);
                    currentSkater = opponent;
                } else {
                    console.log(`Miss! ${skateboarders[opponent].name} fails to land ${trickName}. New score: ${score1} - ${score2}.`);
                }
            } else {
                console.log(`${skateboarders[opponent].name}: sets a new trick.`);
            }
        }

        tricks.splice(randomIndex, 1);
    }

    const winner = score1 === 5 ? skateboarders[0] : skateboarders[1];
    console.log(`${winner.name} wins the game!`);
}

gameOfSkate();