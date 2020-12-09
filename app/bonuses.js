//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let splitArr
  let int = 0
  splitArr = str.split(" ")
  if (splitArr.length == 1) { return str }

  while (int < splitArr.length) {
    int++
    let capping = splitArr[int].charAt(0).toUpperCase() + splitArr[int].slice(1)
    splitArr.splice(int, 1, capping)

    let joinedArr = splitArr.join("")
    console.log(joinedArr)
    return joinedArr
  }

}
