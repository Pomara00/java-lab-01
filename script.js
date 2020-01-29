let name = "Patrick";
let age = 28;
let birthday = "April 28";
let detroitGC = true;

let lifeEvents = ["I was born in Arizona", "I have a Dalmation", "I dive a really small car", "I never park in the garage"];

if (detroitGC === true) {
    console.log(`my name is ${name}.and I am a student at Grand Circus in Detroit, Michigan.I am currently ${age}years old and my birthday is on ${birthday}`);
}

let i = 0
for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0
while (true) {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    if (randomNumber !== 5) {
        counter++;
        console.log(
            `5===5. It took ${counter} interactions to randomly generate the numbers.`
        );
    } else {
        counter++;
        console.log(`“5 === 5. It took ${counter}
iterations to randomly generate the number 5`)
        break
    }

}