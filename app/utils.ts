export const capitalise = (...words: string[]) => {
    return words.map(word => word.toUpperCase()).join('-');
}
export const log = (message: string) => {
    console.info(message)
}
export const add = (firstValue: number, secondValue?: number) => {
    return firstValue + (secondValue ?? 20)
}