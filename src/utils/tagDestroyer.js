export const tagDestroyer = inputText =>
  inputText.replace(/<\/?[^>]+(>|$)/g, '');
