export const capitalise = (...words: string[]) => {
    return words.map(word => word.toUpperCase()).join('-');
}