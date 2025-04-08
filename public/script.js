// Task 6
// Create a query selector to grab the form
const createForm=document.querySelector("form")
// Task 7
// Attatch an event listener to the form
// Inside the event listener create an HTTP POST request which uses the form input as the request body.

createForm.addEventListener("submit",(event)=>{
  event.preventDefault();
  const commentData=new FormData(createForm);
  const reqBody=Object.fromEntries(commentData);

  fetch("/comments",{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify(reqBody)

    })
  .then(()=>{
    window.location.href="/bozo"
  })

  })

// Task 8
// When the database is updated, redirect the user to the homepage

// Task 9
// Once you verify that your code is working, add at least 5 different comments/ratings to 5 different teachers. Then submit.
