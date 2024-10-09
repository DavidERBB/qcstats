const searchQuerySubmit = document.querySelector('.searchQuerySubmit');
const searchQueryInput = document.querySelector('.searchQueryInput');
searchQuerySubmit.addEventListener("click", () => {
    console.log(searchQueryInput.value);
    searchQueryInput.value = "";
});
