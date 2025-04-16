const objIntro = {
  name: "rahul",
  city: "chennai",
};

Function.prototype.myBind = function (context, args) {
  console.log(args, context, this);
  if (typeof this !== "function") {
    throw new Error(this, "invalid call");
  }

  context.func = this;

  return function (...next) {
    console.log(...args, ...next);
    context.func(...args, ...next);
  };
};

function say(greeting) {
  console.log(`name is ${this.name} uhffjd ${greeting}`);
}

const s = say.myBind(objIntro, ["hello"]);

s();
