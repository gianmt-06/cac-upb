export const formatDate = (date: string) => {
    const split = date.split('-');

    const year = split[0];
    const month = split[1];
    const day = split[2];

    return `${month}-${day}-${year}`
}