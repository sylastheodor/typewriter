const sentence = "IF THE ZOO BANS ME FOR HOLLERING AT THE ANIMALS I WILL FACE GOD AND WALK BACKWARDS INTO HELL"

let timer = 0

for (const char of sentence) {
  timer += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
};

setTimeout(() => {process.stdout.write('\n')}, timer);