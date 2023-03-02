export const minValue = (values: number[]): number => {
    return +(values.filter((e,i) => values.indexOf(e) === i).sort((a,b) => a-b).join(''));
};
