/**
 * Мультфильм.
 * @param {string} title - Name of the cartoon
 * @param {number} year - When it released (1990)
 * @param {boolean} forChildren - true/false
 * @param {string} beginning - Several words from the beginning of the cartoon
 */
function Cartoon(
  title,
  year,
  forChildren = true,
  beginning = "Long, long ago..."
) {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
}

Cartoon.prototype.getDescription = function () {
  return Object.entries(this);
};

Cartoon.prototype.play = function () {
  return [this.studio, this.studioLogo, this.title, this.beginning].join("\n");
};

function DisneyCartoon(
  title,
  year,
  forChildren,
  beginning = "Long, long ago in a faraway land..."
) {
  Cartoon.call(this, title, year, forChildren, beginning);
  this.studioLogo = "🏰🌠";
  this.studio = "Walt Disney";
}

Object.setPrototypeOf(DisneyCartoon.prototype, Cartoon.prototype);

function DreamWorksCartoon(title, year, forChildren, beginning) {
  Cartoon.call(this, title, year, forChildren, beginning);
  this.studioLogo = "🌙";

  this.studio = "DreamWorks";
}

Object.setPrototypeOf(DreamWorksCartoon.prototype, Cartoon.prototype);

module.exports = { Cartoon, DisneyCartoon, DreamWorksCartoon };
