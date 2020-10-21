/**
 * wordbreak
 * @param {*} s 
 * @param {*} wordDict 
 */


var wordBreak = function(s, wordDict) {
    const memo = new Map()
    
    function permute(str) {
        if(!str.length) return true;
        if(memo.has(str)) return memo.get(str);
        
        for(let word of wordDict) {
            let patt = RegExp(`^${word}`)
            if(patt.test(str)) {
                if(permute(str.slice(word.length))) {
                    memo.set(str, true);
                    return true;
                }
            }
        }
        memo.set(str, false);
        return false;
    }
    return permute(s);
};


console.log('-------->',wordBreak('catsandog',["cats", "dog", "sand", "and", "cat"]))