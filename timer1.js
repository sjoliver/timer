const args = process.argv.slice(2); //command line arguments

// EDGE CASES
// no numbers provided > no beep, should end immediately 
// an input is a negative number > ignore/skip number
// an input is not a number > ignore/skip

const timer = function(args) {
  if (args) {  
    for (let time of args) {
      if (Number(time) > 0 && Number(time) !== NaN) {
        setTimeout(() => {
          process.stdout.write('.');
        }, Number(time) * 1000)
      }
    }
  }
  return;
}

timer(args);