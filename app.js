function create(a, b, c){
    let conTitle = document.createElement('div')
    conTitle.className = 'content_title'
    let conText = document.createElement('div')
    conText.className = 'content_text'
    let conImg = document.createElement('img')
    conImg.className = 'content_img'
    conImg.src = 'img/background.jpg'
    let doc = document.getElementById('content')
    let con = document.createElement('div')
    con.className = 'content_item'
    doc.appendChild(con)
    con.appendChild(conImg)
    con.appendChild(conTitle)
    con.appendChild(conText)
    conTitle.innerHTML = a
    conText.innerHTML = b
    conImg.innerHTML = c
}

function req() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
             json.forEach(post =>{
                 let title = post.title
                 let body = post.body
                 create(title, body)
             })
        });
}

req();
function img(){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => {
            json.forEach(photo=>{
                let q = document.getElementsByClassName('content_img')
                const img = photo.url
                q.src = img
            })
        })
}

img();

