// readingTime.js
export function calculateReadingTime(articleSelector, readingTimeSelector) {
  var articleText = document.querySelector(articleSelector);
  var readingTimeElement = document.querySelector(readingTimeSelector);

  var wordsPerMinute = 200; // среднее значение для взрослых

  var text = articleText.textContent || articleText.innerText;
  var wordCount = text.split(/\s+/).length;

  var readingTime = Math.ceil(wordCount / wordsPerMinute);

  var minuteWordForm;
  if (readingTime === 1) {
    minuteWordForm = 'минута';
  } else if (readingTime >= 2 && readingTime <= 4) {
    minuteWordForm = 'минуты';
  } else {
    minuteWordForm = 'минут';
  }

  readingTimeElement.textContent = readingTime + ' ' + minuteWordForm;
}
