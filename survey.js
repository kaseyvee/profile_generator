const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name or nickname? ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite? Dinner, brunch, etc...? ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What's your superpower? ", (answer7) => {
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, and eating ${answer5} for ${answer4}. Their favourite sport is ${answer6} and their superpower is ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
