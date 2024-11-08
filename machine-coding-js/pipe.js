const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const get6Characters = (string) => string.substring(0, 6);
const reverse = (string) => string.split("").reverse().join("");

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => {
      console.log(v);
      return f(v);
    }, x);

const res = pipe(
  getName,
  uppercase,
  get6Characters,
  reverse
)({ name: "Buckethead" });

console.log(res);
