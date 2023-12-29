/**
 * Человек.
 * @param {string} name
 */

const { Cartoon } = require("./cartoon");

function Person(name, watchedMovies = []) {
  this.name = name;
  this.watchedMovies = watchedMovies;
}

Object.setPrototypeOf(Person.prototype, Cartoon.prototype);

Person.prototype.watchMovie = function (cartoon) {
  cartoon.play();
  if (!this.watchedMovies.includes(cartoon)) {
    this.watchedMovies.push(cartoon);
  }
};

module.exports = { Person, Cartoon };
