var existingBlogs = document.querySelector("#postedBlogs")
var createBlog = document.querySelector("#createBlog")
var createdBlog = document.querySelector("#createdBlog")
var newBlog = document.querySelector('#newBlog')

function hideCreateBlog() {
    createdBlog.hidden=true;
}
hideCreateBlog();

createdBlog.addEventListener("submit",event=>{
    event.preventDefault()
    console.log('click')
    existingBlogs.hidden=true;
    newBlog.hidden =true;
    createBlog.hidden =false;
});

newBlog.addEventListener("submit", event => {
    var title = document.querySelector("#title").value;
    var content = document.querySelector("#content").value
    event.preventDefault()
    if (!title || !content) {
        alert('Please enter both title and content')
        return;
    }
    const blogObj = {title: title, content: content,}
    fetch("/api/blogs",{
        method:"POST",
        body:JSON.stringify(blogObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            createBlog.setAttribute("hidden", "false")
            location.reload()
        } else {
            alert("Error - please try again")
        }
    })
})