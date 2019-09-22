

const N = 1

const solution = (N) => {
    let binaryNum = N.toString(2);
    array = binaryNum.split('1')
    const arrayLength = array.length;
    if(parseInt(array[arrayLength-1]) == 0) { 
        array.pop()
    }
    let sortedArray = array.sort();
    let maxElement = sortedArray[array.length-1];
    return maxElement.length > 0 ? maxElement.length : 0
}

console.log( solution(N) );
