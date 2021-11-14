const getNumberFromString = (str) => parseInt(str.replace(/[^0-9]/g, ''), 10) || '';

const getNumberWithSpaces = (number) => {
  const chars = [...number.toString()];

  if (chars.length !== 0) {
    const stringWithSpace = chars.reduceRight((acc, char, index, array) => {
      const spaceOrNothing = (array.length - index) % 3 === 0 ? ' ' : '';

      return spaceOrNothing + char + acc;
    });

    const result = stringWithSpace[0] === ' ' ? stringWithSpace.slice(1) : stringWithSpace;

    return result;
  }

  return '0';
};

export {getNumberFromString, getNumberWithSpaces};
