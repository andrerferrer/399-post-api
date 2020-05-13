const searchAlgoliaPlaces = (event) => {
  const searchWord = event.currentTarget.value;
  // console.log(event)
  // console.log(event.currentTarget)
  // console.log(event.currentTarget.value)
  const argumentForTheBody = { query: searchWord }
  const bodyToBeSent = JSON.stringify(argumentForTheBody)

  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: bodyToBeSent
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);
