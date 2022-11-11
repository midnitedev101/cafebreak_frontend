/**
 * The `retrieveExcerptFirstSentence` retrieves the first sentence found for the blog post and 
 * returns it.
 *
 * @param {string} excerpt The post's excerpt contents if it contains
 * @returns {{firstSentence: string}} The string containing the first sentence found in the excerpt
 */

export default function retrieveExcerptFirstSentence(excerpt) {
    if (typeof(excerpt) == 'string') {
      let sentences = excerpt.match(/^(.*?)[\!\?\.\n](<\/p>)?/g); // Match excerpt if ends with ?, !, ., or newline char followed with whitespace or </p> tag
      if (typeof(sentences) == 'object') {  // if matched sentences are of type object, proceeds to retrieve first one
        let firstSentence = sentences.shift();  // Returns 1st array element from split excerpt
        return firstSentence;
      }
    }
    return;
}