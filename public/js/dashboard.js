// section that shows all the users blog posts
var postedblogs = document.querySelector("#postedBlogs")
//section that has the title and content for user to fill 
var createBlog = document.querySelector("#createBlog")

var newBlog = document.querySelector("#newBlog")
// the button to create a new blog post
var newBlogBtn = document.querySelector('#newBlogBtn')


// hiding the create blog section
function hideCreateBlog() {
    createBlog.hidden=true;
}
hideCreateBlog();


// the New Blog button
newBlogBtn.addEventListener("submit",event =>{
    event.preventDefault()
    postedblogs.hidden=true;
    newBlogBtn.hidden =true;
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