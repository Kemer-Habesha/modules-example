// Greeter
const Greeter = function (name) {
  this.name = name;
};

Greeter.prototype.sayHi = function () {
  console.log(`Hi ${this.name}`);
};

// exports = {};
// exports.x = Greeter
// exports.y = general

const general = function () {
  console.log("This is a general function");
};

module.exports = Greeter;
