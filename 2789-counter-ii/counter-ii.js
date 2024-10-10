/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
function createCounter(init) {
    currentValue = init;
    return {
        increment(){
            ++currentValue;
            return currentValue;
        },
        decrement(){
            --currentValue;
            return currentValue;
        },
        reset(){
            currentValue=init;
            return currentValue;
        }
    }
};
////
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */