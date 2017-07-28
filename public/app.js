let markAsComplete = document.querySelectorAll('.markAsComplete')
let complete = document.querySelector('#complete')

let moveCompleted = function() {
  let buttonThatWasClicked = this
  let clickedId = buttonThatWasClicked.id.split('_')[1]
  buttonThatWasClicked.remove()
  let newDoneTask = document.getElementById(clickedId)
  complete.appendChild(newDoneTask)
  newDoneTask.className = 'complete'
}

markAsComplete.forEach(function(button) {
  button.addEventListener('click', moveCompleted)
})
