const modal = document.querySelector('.modal-overlay')
const courses = document.querySelectorAll('.course')

for (const course of courses) {
    course.addEventListener('click', () => {
        // The method contains() receive a string as parameter and returns true or false 
        if(modal.classList.contains('active') === false) {
            modal.classList.add('active')
            const idCourse = course.getAttribute('id')
            modal.querySelector('iframe').src = `https://rocketseat.com.br/${idCourse}`
        }
    })
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modal.classList.remove('active')
    modal.querySelector('iframe').src = ''
})