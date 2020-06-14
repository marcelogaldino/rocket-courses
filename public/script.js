const modal = document.querySelector('.modal-overlay')
const courses = document.querySelectorAll('.course')

for (const course of courses) {
    course.addEventListener('click', () => {
        const idCourse = course.getAttribute('id')

        window.location.href = `courses/${idCourse}`

        // The method contains() receive a string as parameter and returns true or false 
        // if(course.classList.contains('link') === true) {
        //     modal.classList.add('link')
        //     window.location.href = `https://rocketseat.com.br/${idCourse}`
        // }
    })
}

// document.querySelector('.close-modal').addEventListener('click', () => {
//     modal.classList.remove('active')
//     modal.querySelector('iframe').src = ''
// })