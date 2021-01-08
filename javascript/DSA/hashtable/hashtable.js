function hashStringToInt(s, tableSize) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(30);
  numItems = 0;

  setItem = (key, value) => {
    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);

    if (!this.table[idx]) {
      return null;
    }
    return this.table[idx].find((x) => x[0] === key)[1];
  };
}

const myTable = new HashTable();

myTable.setItem("fname", "vignesh");
myTable.setItem("lname", "vignesh");
myTable.setItem("dob", "26/09/1994");
myTable.setItem("age", "22");
myTable.setItem("skill", "react");

console.log(myTable.getItem("age"));
