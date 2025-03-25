fetch(`http://localhost:3000/api/students/8bdb1dd8-891a-4ef5-84b3-c61ce8f98cfd`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })