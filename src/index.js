module.exports = function toReadable (number) {
    const numberList = {'0': 'zero',
                        '1': 'one',
                        '2': 'two',
                        '3': 'three',
                        '4': 'four',
                        '5': 'five',
                        '6': 'six',
                        '7': 'seven',
                        '8': 'eight',
                        '9': 'nine'
                        }

    const numTeenList = {'10': 'ten',
                        '11': 'eleven',
                        '12': 'twelve',
                        '13': 'thirteen',
                        '14': 'fourteen',
                        '15': 'fifteen',
                        '16': 'sixteen',
                        '17': 'seventeen',
                        '18': 'eighteen',
                        '19': 'nineteen',
                        };

    const decList = {'1': 'ten',
                    '2': 'twenty',
                    '3': 'thirty',
                    '4': 'forty',
                    '5': 'fifty',
                    '6': 'sixty',
                    '7': 'seventy',
                    '8': 'eighty',
                    '9': 'ninety'
                    };
    
    let result = '';

    num = String(number);

    while (num) {
        if (num.length === 3) {
            if (num.slice(1) === '00') {
                return `${numberList[num[0]]} hundred`;
            }
            result += `${numberList[num[0]]} hundred`;
            num = num.slice(1);
        }

        if (num.length === 2 &&
            num[0] === '1') {
            result += ` ${numTeenList[num]}`;
            num = '';
        } else if (num.length === 2 &&
                    num[0] === '0') {
            num = num.slice(1);
        } else if (num.length === 2 &&
            num[num.length - 1] !== '0') {
            result += ` ${decList[num[0]]}`;
            num = num.slice(1);
        } else if (num.length === 2) {
            result += ` ${decList[num[0]]}`;
            num = '';
        }

        if (num.length === 1) {
            result += ` ${numberList[num]}`;
            num = '';
        }

    }

    return result.trim();
}
