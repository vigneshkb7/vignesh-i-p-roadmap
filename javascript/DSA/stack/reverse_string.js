// reverse a string
// i/p "i.like.this.program.very.much"
// o/p "i.ekil.siht.margorp.yrev.hcum"

function reverseString(str, sep) {
  const arr = str.split(sep);
  const revesedArr = arr.map((a) => a.split("").reverse().join(""));
  return revesedArr.join(sep);
}

console.log("---", reverseString("i.like.this.program.very.much", "."));
