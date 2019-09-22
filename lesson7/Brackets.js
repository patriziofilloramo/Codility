const solution = (S) => {

    console.log(S)
    let stack = [];
        

    for(let i = 0; i < S.length; i++) {
        const currentBracket = S.charAt(i);
        /* se incontro bracket di apertura li metto nello stack */
        if(currentBracket== '(' || currentBracket == '{' || currentBracket == '[') {
            stack.push(currentBracket);
            console.log('---------------');
            console.log('Pushed in to the stack: ', currentBracket);
            console.log('Stack is now: ', stack);
            console.log('---------------');
        }
        else {
            console.log('Stack: ', stack);

            /* Ho incontrato un closing, se lo stack degli Open è vuoto allora è finita */
            if(stack.length == 0) return 0;

            /* prelevo dallo stack l'ultimo degli Opening */
            let lastChar = stack.pop();
            console.log('Took from the stack POP', lastChar);
            console.log('meanwhile the currentBracket is ', currentBracket)

            /* se si tratta di '(' e il currentBracket non ')' allora errore */
            if(lastChar == '(' && currentBracket != ')') return 0;
            /* se si tratta di '{' e il currentBracket non '}' allora errore */
            else if(lastChar == '{' && currentBracket != '}') return 0;
            /* se si tratta di '[' e il currentBracket non ']' allora errore */
            else if(lastChar == '[' && currentBracket != ']') return 0;
        }
    }
    
    if(!stack.length == 0) return 0;
    
    return 1;
}

const S = '{[()()]}'
console.log(solution(S));