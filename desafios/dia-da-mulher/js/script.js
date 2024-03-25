/* Select elements */
const btnOpenModal = document.querySelector('#btn-message')
const btnCloseModal = document.querySelector('.btn-close-modal')

/* Open modal */
btnOpenModal.addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'block'   
})

/* Close modal */
btnCloseModal.addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'none'    
})
