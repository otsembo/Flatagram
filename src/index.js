// write your code here

const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", ()=>{

  loadImage()

  loadComments()

})

document.getElementById("like-button").addEventListener("click", ()=>{
  likeImage()
})


document.getElementById("comment-form").addEventListener("submit", (e)=>{
  e.preventDefault()
  addComment(
    document.getElementById("comment").value
  )
})

function loadImage(){

    fetch(BASE_URL + "images/1")
      .then( (response) => response.json())
      .then((image)=>{

        //document.getElementById("").value = image.id;
        document.getElementById("card-title").innerText = image.title;
        document.getElementById("like-count").innerText = image.likes;
        document.getElementById("card-image").src = image.image;

      })

}


function likeImage(){
  let likes = document.getElementById("like-count").innerText;
  likes = parseInt(likes);
  likes += 1;
  document.getElementById("like-count").innerText = likes;
}


function loadComments(){

  const list = document.getElementById("comments-list");

  fetch(BASE_URL + "comments")
    .then( (response) => response.json())
    .then((comments)=>{

      comments.forEach(
        (comment) => {
          const element = document.createElement("li");
          element.innerText = comment.content;
          list.append(element);
        }
      )
    })

}

function addComment(comment){
  const list = document.getElementById("comments-list");
  const element = document.createElement("li");
  element.innerText = comment;
  list.append(element);
}
