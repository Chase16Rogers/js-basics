//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let splitted = str.split(" ")

  for (let i = 0; i < splitted.length; i++) {
    let capital = splitted.splice(i, 1)
      .capital.char(0).toUppercase()
  }

  console.log("Array: " + splitted)
  let joined = splitted.join("-")
  console.log(joined)
  return joined
}
