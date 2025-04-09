const form = document.querySelector('form')

form.addEventListener('submit', async (e) => {

    e.preventDefault()
    const formData = new FormData(form)
    const reqBody = Object.fromEntries(formData.entries())
    const response = await fetch('/add/rating', {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    })

    const data = await response.json()

    console.log(data)

   window.location.href = "/ratings"

})
