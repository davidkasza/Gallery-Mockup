let currentPhoto = 0;
let data = {
  photo: [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg",
    "./images/10.jpg",
    "./images/11.jpg",
    "./images/12.jpg",
    "./images/13.jpg",
    "./images/14.jpg",
    "./images/15.jpg",
    "./images/16.jpg",
    "./images/17.jpg",
  ],
  title: [
    "Arriving to Switzerland",
    "Winterthur",
    "Winterthur",
    "Rheinfall",
    "Rheinfall",
    "Rheinfall",
    "Rheinfall - from ship",
    "Rheinfall - from ship",
    "Near Rheinfall",
    "Near Rheinfall",
    "Zürich - from ship",
    "Zürich - from ship",
    "Traveling by train",
    "Traveling by train",
    "Traveling by train",
    "Konstanz",
    "Konstanz",
  ],
  description: [
    "I just crossed the Austrian-Swiss border and this look welcomed me there",
    "I came to Zürich from Budapest by train, and I was directly going to my accommodation, which was located in Winterthur. This is an average look of a street",
    "This is the Stadthaus of Winterthur, which is on the Stadthausstrasse",
    "The Rhine Falls (German: Rheinfall) is a waterfall located in Switzerland and the most powerful waterfall in Europe.",
    "The falls are located on the High Rhine on the border between the cantons of Schaffhausen and Zürich, between the municipalities of Neuhausen am Rheinfall and Laufen-Uhwiesen/Dachsen, next to the town of Schaffhausen in northern Switzerland.",
    "They are 150 metres wide and 23 metres high. In the winter months, the average water flow is 250 m3/s, while in the summer, the average water flow is 600 m3/s.",
    "The highest flow ever measured was more than 1250m3/s in 1999, previous to that the record was 1,250 cubic metres per second in 1965; and the lowest, 95 cubic metres per second in 1921.",
    "The falls cannot be climbed by fish, except by eels that are able to worm their way up over the rocks.",
    "Sailing around, the Swiss-German border",
    "",
    "Zürich is the largest city in Switzerland and the capital of the canton of Zürich.",
    "",
    "Budapest - Zürich",
    "Budapest - Zürich",
    "Budapest - Zürich",
    "Konstanz is a university city with approximately 83,000 inhabitants located at the western end of Lake Constance in the south of Germany.",
    "The city is located in the state of Baden-Württemberg and situated at the banks of Lake Constance. The river Rhine, which starts in the Swiss Alps, asses through Lake Constance and leaves it",
  ],
};

function loadPhoto(currentPhoto) {
  $("#photo").attr("src", data.photo[currentPhoto]);
  $("#photo-title").text(data.title[currentPhoto]);
  $("#photo-description").text(data.description[currentPhoto]);
  loadThumbnail(currentPhoto);
}

function loadThumbnail(currentPhoto) {
  let index = currentPhoto;
  $(".thumbnail").each(function (i) {
    index = index + 1 <= data.photo.length ? index + 1 : 1;
    $(this).html(
      `<img class = 'thumbnail-photo' id = ${index} src='./images/${index}.jpg' alt = '${data.title[index]}'/>`
    );
  });

  data.title.forEach((item, index) => {
    $(".thumbnail-photo").html(
      `<img class = 'thumbnail-photo' id = '${index + 1}' data-index = ${
        index + 1
      } src='./images/${index + 1}.jpg' alt = '${data.title[index]}'/>`
    );
    $(".thumbnail-photo").click((event) => {
      let indexClicked = $(event.target).attr("id");
      loadPhoto(indexClicked - 1);
    });
  });
}

$("#right-arrow").click(() => {
  currentPhoto += 1;
  if (currentPhoto > data.title.length - 1) {
    currentPhoto = 0;
  }
  loadPhoto(currentPhoto);
});

$("#left-arrow").click(() => {
  currentPhoto -= 1;
  if (currentPhoto < 0) {
    currentPhoto = data.title.length - 1;
  }
  loadPhoto(currentPhoto);
});

loadPhoto(currentPhoto);

$(".thumbnail").each(function (i) {
  $(this).html(`<img class = 'thumbnail-photo' src='./images/${i + 1}.jpg'/>`);
});
