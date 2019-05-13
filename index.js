function iterativeLog(callback) {
  callback.forEach((element, index) =>{
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  let arr = [42, 73, 63];
  arr.forEach(callback);
}
