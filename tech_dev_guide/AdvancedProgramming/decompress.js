/**
 * https://techdevguide.withgoogle.com/paths/advanced/compress-decompression/#!
 */

const R = require("ramda");

const input = "ab2[cd3[e]fg]2[3[hi4[jk]]lm]yz"
const expect = {
    "ab2[cd3[e]fg]2[3[hi4[jk]]lm]yz": "abcdeeefgcdeeefghijkjkjkjkhijkjkjkjkhijkjkjkjklmhijkjkjkjkhijkjkjkjkhijkjkjkjklmyz",
    "3[abc]4[ab]c": "abcabcabcababababc",
    "2[3[a]b]": "aaabaaab"
}

const decompress = (input, param = {}) => {
    let { start = 0 } = param;
    let target = "",
        endBracketIndex = 0,
        nestParam = {},
        decompressed = "",
        repeatCount = 0,
        result = [];
    for (start; start < input.length; ++start) {
        target = input[start];
        console.log(target, start, result)
        if (target.match(/[0-9]/)) {
            // [まで数値として処理する
            for (let j = start + 1; j < input.length; ++j) {
                if (input[j] === "[") {
                    endBracketIndex = j
                    break
                }
            }
            // 数値[移行を再帰で処理させる
            repeatCount = Number(input.substring(start, endBracketIndex));
            nestParam = { start: endBracketIndex + 1 };
            decompressed = decompress(input, nestParam);
            start = nestParam.start;
            for (let k = 0; k < repeatCount; ++k) {
                result.push(decompressed);
            }
            continue;
        } else if (target === "]") {
            // 処理したindexを設定して、呼び出し側がそこから処理できるようにする
            param.start = start;
            return result.join("");
        } else {
            // 通常文字列
            result.push(target);
        }
    }
    return result.join("");
}

const result = decompress(input);


console.log(result, "is matched expect", expect[input] === result)
