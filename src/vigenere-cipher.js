class VigenereCipheringMachine {

    constructor(reverse) {
        this.reverse = reverse;
    }

    encrypt(str, key) {
        let primary = 'A'.charCodeAt();
        let result = [];
        let keyIndexCount = 0;
        str = str.toUpperCase().split('');
        key = key.toUpperCase().split('');

        for (let i = 0; i < str.length; i++) {
            if (!str[i].match(/[A-Z]/)) {
                result.push(str[i]);
                continue;
            }

            let encKey = (str[i].charCodeAt() + key[keyIndexCount].charCodeAt()) % 26;
            result.push(String.fromCharCode(encKey + primary));
            keyIndexCount++;

            if (keyIndexCount >= key.length) {
                keyIndexCount = 0;
            }

        }

        return (this.reverse === false) ? result.reverse().join('') : result.join('');  
    }

    decrypt(str, key) {
        let primary = 'A'.charCodeAt();
        let result = [];
        let keyIndexCount = 0;
        str = str.toUpperCase().split('');
        key = key.toUpperCase().split('');

        for (let i = 0; i < str.length; i++) {
            if (!str[i].match(/[A-Z]/)) {
                result.push(str[i]);
                continue;
            }

            let decKey = (str[i].charCodeAt() + 26 - key[keyIndexCount].charCodeAt()) % 26;
            result.push(String.fromCharCode(decKey + primary));
            keyIndexCount++;

            if (keyIndexCount >= key.length) {
                keyIndexCount = 0;
            }
        }

        return (this.reverse === false) ? result.reverse().join('') : result.join('');     
    }
}

module.exports = VigenereCipheringMachine;
