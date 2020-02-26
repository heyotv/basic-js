module.exports = function repeater(str, options) {
    let additionResult = '';
    let result = '';
    let addition = String(options.addition) || '';
    let separator = options.separator || '+';
    let additionSeparator = options.additionSeparator || '|';

    if (!options.additionRepeatTimes) {
        additionResult = options.addition ? options.addition : '';
    } else {
        additionResult = options.addition;
        for (let i = 1; i < options.additionRepeatTimes; i++) {
            additionResult += additionSeparator + options.addition;
        }
    }
    
    if (!options.repeatTimes) {
        result = str + additionResult;
    }

    result = str;
    for (let i = 1; i < options.repeatTimes; i++) {
        result += additionResult + separator + str;
    }

    result += additionResult;


    return result;
};