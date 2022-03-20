let str = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";


//First solution:
const longestWordHandler = text => {
  let textModefied = text.replace(/[^a-zA-Z ]/g, ""); 
  let textArr = textModefied.split(" ");
  let textLength = 0;
  let longestWord;

  for(let i = 0; i<textArr.length; i++) {
    if(textArr[i].length > textLength) {
      textLength = textArr[i].length;
      longestWord = textArr[i];
    }
    else if(textArr[i].length === textLength) {
      let vowelsInFirst = (textArr[i].match(/[aeiou]/ig)).length;
      let vowelsInSecond = (longestWord.match(/[aeiou]/ig)).length;
      return (vowelsInFirst > vowelsInSecond ? textArr[i] : longestWord)
    }
  }
  return longestWord;
}
console.log(longestWordHandler(str));



//Second Solution: using higher order function reduce():

const longestWord = text => {
  let textModefied = text.replace(/[^a-zA-Z ]/g, ""); 
  const longestWord = textModefied.split(" ").reduce((a, b) => a.length > b.length ? a : b)
  return longestWord
}
console.log(longestWord(str));