// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D(500) and M(1000) to make 400 and 900.

function romanToInt(s: string): number {
  const mapping = {
    I: 1,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanArray = s.split("");
  let res = 0;
  for (let i = 0; i < romanArray.length; i++) {
    if (
      romanArray[i] == "I" &&
      (romanArray[i + 1] == "V" || romanArray[i + 1] == "X")
    ) {
      res += mapping[`${romanArray[i]}${romanArray[i + 1]}`];
      i++;
    } else if (
      romanArray[i] == "X" &&
      (romanArray[i + 1] == "L" || romanArray[i + 1] == "C")
    ) {
      res += mapping[`${romanArray[i]}${romanArray[i + 1]}`];
      i++;
    } else if (
      romanArray[i] == "C" &&
      (romanArray[i + 1] == "D" || romanArray[i + 1] == "M")
    ) {
      res += mapping[`${romanArray[i]}${romanArray[i + 1]}`];
      i++;
    } else {
      res += mapping[romanArray[i]];
    }
  }
  return res;
}
