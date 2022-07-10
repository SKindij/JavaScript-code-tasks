// In what order will the numbers 1-4 be logged to the console when the code below is executed?
(function() {
    console.log(1);
      setTimeout(function() {
        console.log(2);
      }, 1000);
     setTimeout(function() {
        console.log(3);
      }, 0);
        console.log(4);
}) (); // => 1, 4, 3, 2

// What does the following code print?
console.log('one');
  setTimeout(function() {
      console.log('two');
  }, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four'); // => one   four   three   undefined   two







