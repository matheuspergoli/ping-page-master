const form = document.querySelector('#form')
const modalError = document.querySelector('#box-error')
const modalSuccess = document.querySelector('#box-success')
const validEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function sendForm(event) {
  event.preventDefault()

  const email = form.querySelector('#email')
  if (email.value.match(validEmail)) {
    email.classList.remove('error')
    email.value = ''
    showModal(modalSuccess)
    closeModal(modalSuccess)
  } else {
    email.classList.add('error')
    showModal(modalError)
    closeModal(modalError)
    return
  }
}

form.addEventListener('submit', sendForm)

function showModal(modal) {
  modal.showModal()
}

function closeModal(modal) {
  setTimeout(() => {
    modal.close()
  }, 3500)
}