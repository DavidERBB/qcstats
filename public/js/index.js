const searchQuerySubmit = document.querySelector('.searchQuerySubmit');
const searchQueryInput = document.querySelector('.searchQueryInput');
searchQuerySubmit.addEventListener("click", () => {
    console.log(searchQueryInput.value);
    searchQueryInput.value = "";
});

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting and reloading the page
    let searchValue = document.getElementById('searchQueryInput').value;
    document.getElementById('searchQueryInput').value = "";
    console.log(searchValue);
  });