let searchBar = document.getElementById('school-search');
let searchResult = document.getElementById('search-result')


fetch(location.href + '/get_stu_data')
.then(response => {
    return response.json();
})
.then(stu_data => {

    curr_url = location.href;
    searchBar.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            if (stu_data[searchBar.value] != undefined)
                location.href = curr_url + `/${searchBar.value}`;
        }
    })

});
