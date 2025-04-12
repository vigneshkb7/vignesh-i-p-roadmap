//Implement a Credit Card Masker | Klarna Frontend Interview Question | JavaScript

function mask(cardnumber) {
  if (!cardnumber) return "";
  if (cardnumber.length < 6) {
    return cardnumber;
  }
  if (!/^[A-Za-z0-9]+$/.test(cardnumber)) {
    return "";
  }
  let lastFour = cardnumber.slice(-4);
  let first = cardnumber.slice(0);
  const X = Array.from({ length: cardnumber.length - 5 }, () => "x");

  return `${first}${X.join("")}${lastFour}}`;
}

function mask(cardnumber) {
  const inputType = typeof cardnumber;
  if (inputType !== "number" && inputType !== "string") {
    return "";
  }
  const cc = String(cardnumber);

  if (cc.length < 6) {
    return "";
  }

  const first = cc.splice(0, 1);
  const last = cc.splice(-4);
  const remaining = cc.splice(1, cc.length - 4).replace(/\d/g, "#");

  return `${first}${remaining}${last}}`;
}
