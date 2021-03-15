module.exports = function check(str, bracketsConfig) {
  let closedBracketsArr = [];
  let openedBracketsArr = [];
  let stack = [];
  let result;

  for (let i = 0; i < bracketsConfig.length; i++){
      openedBracketsArr.push(bracketsConfig[i][0]);
      closedBracketsArr.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < str.length; i++){
      if (openedBracketsArr.includes(str[i]) && closedBracketsArr.indexOf(str[i]) === -1 || openedBracketsArr.includes(str[i]) && closedBracketsArr.includes(str[i]) && stack[stack.length - 1] !== str[i]) {
          stack.push(str[i]);
      }
      else if (openedBracketsArr.indexOf(stack[stack.length - 1]) === closedBracketsArr.indexOf(str[i])) {
          stack.pop();
      }
      else {
          result = false;
          stack.push(str[i]);
          break;
      }
  }
  if (stack.length === 0) {
      result = true;
  }
  else {
      result = false;
  }
  return result;
}
