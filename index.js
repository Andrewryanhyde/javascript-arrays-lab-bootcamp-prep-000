const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop(1);
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(1);
}

function appendKitten(name) {
  let newKittens = kittens.push(name);
  return newKittens;
}