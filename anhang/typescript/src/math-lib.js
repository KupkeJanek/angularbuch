function MyMathLib () {
}
 
MyMathLib.max = function(arr) {
  var result = arr[0];
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
      index = i;
    }
  }
  return { result: result, index: index };
};

function logWithTimeStamp(text) {
  console.log(new Date().toDateString() + ": "  + text);
  return {connected: true};
}