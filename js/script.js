"use strict";
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    console.log(result.find(item => item.company.name == "Johns Group"));
  })
  .catch((error) => console.error(error));