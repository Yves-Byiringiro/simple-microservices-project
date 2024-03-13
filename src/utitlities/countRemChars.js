


export const countRemChars = (setContent, value, valueLength, maxChars, setCharsCount) => {
    setContent(value)
    let lenCount = valueLength;
    let maxLen = maxChars;
    let remChars = maxLen - lenCount;
    setCharsCount(remChars);
};