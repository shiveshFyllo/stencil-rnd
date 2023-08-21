const capitalizeWords = (sentence: string): string => {
  return sentence
    .split(' ')
    .map(word => word[0]?.toUpperCase() + word?.slice(1))
    .join(' ');
};

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const removeUnderScores = (text: string | number, textTransform: 'default' | 'uppercase' | 'lowercase' | 'capitalize' = 'lowercase') => {
  if (typeof text === 'number') {
    return text;
  }

  const updatedText = text.replaceAll('_', ' ');
  if (textTransform === 'lowercase') {
    return updatedText.toLowerCase();
  }

  if (textTransform === 'uppercase') {
    return updatedText.toUpperCase();
  }

  if (textTransform === 'capitalize') {
    return capitalizeWords(updatedText.toLowerCase());
  }

  return updatedText;
};
