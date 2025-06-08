const fetchTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200){
            callback(undefined, JSON.parse(request.responseText));
        }else if(request.readyState === 4){
            callback("COULD NOT FETCH THA DATA", undefined);
        }
    });

    request.open('GET', resource);
    request.send();
}

fetchTodos("todos/sigma.json", (err, data) => {
    data.forEach(element => {
        console.log(element);
    });
    fetchTodos("todos/alpha.json", (err, data) => {
        data.forEach(element => {
            console.log(element);
        });
        fetchTodos("todos/beta.json", (err, data) => {
            data.forEach(element => {
                console.log(element);
            })
        })
    })
});
