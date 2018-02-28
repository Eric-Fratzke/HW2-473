var DETAIL_IMAGE_SELECTOR = "[data-image-role='target']";
var DETAIL_TITLE_SELECTOR = "[data-image-role='title']";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";
var thumbnails = [];
var otters = 5;
var index = 0;

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    if (thumb.getAttribute("data-value") == "left")
      prevOtterPic();
    else if (thumb.getAttribute("data-value") == "right")
      nextOtterPic();
    else {
      setDetailsFromThumb(thumb);
      index = thumbnails.indexOf(thumb);
    }
  });
}

//Called when < is clicked
function prevOtterPic() {
  index = (otters + index - 1) % otters;
  setDetailsFromThumb(thumbnails[index]);
}

//Called when > is clicked
function nextOtterPic() {
  index = (index + 1) % otters;
  setDetailsFromThumb(thumbnails[index]);
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  "use strict";
  thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
