// Given an account defined as:

// Account
//   balance (decimal number)
//   name: (string)
//   accountType (e.g. credit card, checking, savings)
//   openedDate: (time stamp)

// for example
//   balance: 1000.00
//   name   : Chase Freedom
//   accountType   : credit card
//   opened Date: 6/19/2004

// Compare 2 sets of accounts for a user - one set from the current month, and one set from the prior month, e.g.:

// previous: [
//   { "balance":2000.0, "name":"Chase Freedom", "accountType":"credit_card", "openedDate":1111680799 },
//   { "balance":100.0, "name":"Citibank", "accountType":"credit_card", "openedDate":1000680799 }
// ]
// current:  [
//   { "balance":1000.0, "name":"Chase Freedom", "accountType":"credit_card", "openedDate":1111680799 },
//   { "balance":500.0, "name":"American Express", "accountType":"credit_card", "openedDate":1222680799 }
// ]

// - print out "<name>: <balance change>" for accounts that are in both months, e.g. "Chase Freedom: -1000"
// - print out "<name>: added" for those that are in the current month but not the previous month, e.g. "American Express: added"
// - print out "<name>: deleted" for those that are in the previous month but not the current month, e.g. "Citibank: deleted"

type Account = {
  balance: number;
  name: string;
  accountType: string;
  openedDate: number;
};

function compareAccounts(previous: Account[], current: Account[]): void {
  const prevMap = new Map<string, Account>();
  const currMap = new Map<string, Account>();

  previous.forEach((account) => {
    prevMap.set(account.name, account);
  });

  current.forEach((account) => {
    currMap.set(account.name, account);
  });

  // Check for updated or deleted accounts
  for (const [name, prevAcc] of prevMap) {
    if (currMap.has(name)) {
      const currAcc = currMap.get(name)!;
      const balanceChange = currAcc.balance - prevAcc.balance;
      console.log(`${name}: ${balanceChange}`);
    } else {
      console.log(`${name}: deleted`);
    }
  }

  // Check for added accounts
  for (const [name] of currMap) {
    if (!prevMap.has(name)) {
      console.log(`${name}: added`);
    }
  }
}

// Example usage
const previous: Account[] = [
  {
    balance: 2000.0,
    name: "Chase Freedom",
    accountType: "credit_card",
    openedDate: 1111680799,
  },
  {
    balance: 100.0,
    name: "Citibank",
    accountType: "credit_card",
    openedDate: 1000680799,
  },
];

const current: Account[] = [
  {
    balance: 1000.0,
    name: "Chase Freedom",
    accountType: "credit_card",
    openedDate: 1111680799,
  },
  {
    balance: 500.0,
    name: "American Express",
    accountType: "credit_card",
    openedDate: 1222680799,
  },
];

compareAccounts(previous, current);
