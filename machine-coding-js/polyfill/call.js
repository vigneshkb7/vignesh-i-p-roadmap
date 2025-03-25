const objIntro = {
  name: "rahul",
  city: "chennai",
};

Function.prototype.myCall = function (context, ...args) {
  console.log(...args);
  console.log(args);
  if (typeof this !== "function") {
    throw new Error(this, "invalid call");
  }

  context.func = this;

  context.func(...args);
};

function say(greeting) {
  console.log(`name is ${this.name} uhffjd ${greeting}`);
}

say.myCall(objIntro, "hello");
