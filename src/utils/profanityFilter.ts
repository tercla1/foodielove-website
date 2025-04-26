
// Basic list of inappropriate words to filter
const inappropriateWords = [
  'inappropriate',
  'offensive',
  // Add more words as needed
];

export const containsProfanity = (text: string): boolean => {
  if (!text) return false;
  
  const lowerText = text.toLowerCase();
  return inappropriateWords.some(word => 
    lowerText.includes(word.toLowerCase())
  );
};

export const filterProfanity = (text: string): string => {
  if (!text) return '';
  
  let filteredText = text.toLowerCase();
  inappropriateWords.forEach(word => {
    const regex = new RegExp(word, 'gi');
    filteredText = filteredText.replace(regex, '*'.repeat(word.length));
  });
  
  return filteredText;
};
