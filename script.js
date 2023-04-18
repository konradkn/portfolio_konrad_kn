//event listener for dark mode
const switchSelection = document.querySelector('.switch');

switchSelection.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})

//event listener to change the show more summary when clicked
let summarySelector = () => {
    if(document.getElementById('summary').innerHTML == 'Show more +') {
        summary.innerHTML = 'Show less -'
    } else {
        document.getElementById('summary').innerHTML = 'Show more +'
    }
}

document.getElementById('summary').addEventListener('click', summarySelector)

let projectSelector = document.querySelectorAll('.project');
let linkImageSelector = document.querySelector('.link-images')
// linkImageSelector.hidden = true

projectSelector.forEach((element, index) => {
    element.setAttribute('id', `project${index}`)
    element.addEventListener('mouseover', (e) => {
        // if(e.target.id == 0) {
        //     linkImageSelector.hidden = true
        // } else {
        //     linkImageSelector.hidden = false

        // }
    })
    console.log(element.id)
})