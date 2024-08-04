// return a string with all lowercase and space replaced with "-"
export const formatString = (inputString) => {
  return inputString.toLowerCase().replace(/\s+/g, '-');
}