const H = [8, 8, 5, 7, 9, 8, 7, 4, 8];

const sol = H => {
  let stack = [];
  let stones = 0;
  let stack_num = 0;

  H.forEach(value => {
    while (stack.length > 0 && stack[stack_num - 1] > value) {
        console.log('-----------------');
      stack_num--;
        console.log('destroying: ', stack)
        console.log('stack_num: ', stack_num);
        console.log('-----------------');

    }
    console.log('**************************************');

    console.log('stack: ', stack);
    if (stack_num > 0 && stack[stack_num - 1] == value) {
        // do nothing
        console.log('do nothing. Add stones!')
    } else {
    
      stones++;
      stack[stack_num] = value;
      stack_num++;
      console.log('stones: ', stones);
      console.log('stack: ', stones);
      console.log('stack_num: ', stack_num);
      console.log('**************************************');
      
      

    }
  });

  return stones;
};

console.log(sol(H));
