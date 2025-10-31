const repeatString = function(str, num) {
    let strRepeat = str
    if (num < 0 ) return 'ERROR'
    if (num == 0) return ''
    for (let i = 1; i < num; i++) {
      strRepeat += str
    }
    return strRepeat
}

// Do not edit below this line
module.exports = repeatString;
