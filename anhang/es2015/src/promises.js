// ------  Promises ----------

function calculateTheAnswer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.50) {
        resolve('42');
      } else {
        resolve('4711');
      }
    }, 1000);
  });
}

function checkAnswer(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer === '42') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

calculateTheAnswer()
  .then((answer) => {
    console.log(`Die Antwort lautet ${answer}`);
    return checkAnswer(answer);
  })
  .then(() => {
    console.log('Die Antwort war richtig!');
  }).catch(() => {
  console.log('Die Antwort war falsch!');
});
// ------  Promise.all ----------

function calculatePi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('3.1415926535');
    }, 3000);
  });
}

Promise.all([
  calculateTheAnswer(),
  calculatePi()])
  .then((results) => {
    console.log(`Die Antwort: ${results[0]}`);
    console.log(`Pi: ${results[1]}`);
  })
  .catch((results) => {
    console.log(results);
  });


const takes500ms = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Wert 1');
  }, 500);
});
const takes200ms = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Wert 2');
  }, 200);
});

Promise.race([takes200ms, takes500ms]).then(value => {
  console.log(value); // Wert 2
});

const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Request timed out');
  }, 2000);
});

const longRunningCall = new Promise((resole, reject) => {
  setTimeout(() => {
    resolve('Returned from long running request');
  }, 10000);
});

Promise.race([longRunningCall, timeoutPromise])
  .then(value => {
    console.log(value);
  }).catch(error => {
    console.log(error); // Request timed out
});


// ---------- Lösung über Callback Funktionen
/*
 function calculateTheAnswerWithCallback(callback) {
 setTimeout(() => {
 if (typeof callback === 'function') {
 callback('42');
 }
 },1000)
 }


 function checkAnswerWithCallback(answer, successCallback, errorCallback) {
 setTimeout(() => {
 if (answer === '42'){
 successCallback();
 } else {
 errorCallback();
 }
 },1000)
 }

 calculateTheAnswerWithCallback((answer) => {
 console.log(`Die Antwort lautet ${answer}`);
 checkAnswerWithCallback(answer,
 function() {
 console.log('Die Antwort war richtig')
 },
 function() {
 console.log('Die Antwort war falsch')
 });
 });
 */