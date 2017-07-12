const expect = require("chai").expect;

function spinWords(words){
  return words
  .split(" ")
  .map( word => {
    if(word.length >= 5) return word.split("").reverse().join("")
    return word
  })
  .join(" ")
}

it("spinWords reverses words", () => {
  expect(spinWords("Hey fellow warriors")).to.eq("Hey wollef sroirraw")
})
