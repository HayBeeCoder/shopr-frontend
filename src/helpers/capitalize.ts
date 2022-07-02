export const Capitalize = (word: string) => {
    const first_letter = word.slice(0,1).toUpperCase()
    return first_letter + word.slice(1)

}