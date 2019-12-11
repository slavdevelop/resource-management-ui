export const tagDestroyer = inputText =>
  inputText.replace(/<\/?[^>]+(>|$)/g, '').replace('alert(1);', '');
