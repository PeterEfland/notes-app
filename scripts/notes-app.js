'use strict'

let notes = getSavedNotes()

// we create a filters object to store filters.
const filters = {
    searchText: '',
    sortBy: 'byEdited' 
}


// we call renderNotes outside of any function passing in latest notes and filters. This is to make sure of the initial rendering.
renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', (event) => {
    const id = uuidv4()
    const timeStamp = new moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    })
    saveNotes(notes)
    location.assign(`edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value  
    renderNotes(notes, filters) 
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filter)
    }
})


// JS Moment Library

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// // Time format
// console.log(now.format('MMMM Do, YYYY'))

// // Time from now
// console.log(now.fromNow())

// // Timestamp with Moment
// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

// const yaya = moment('2010-11-19')
// console.log(yaya.format('MMMM D, YYYY'))

// const birthday = moment()
// birthday.year(1979).month(4).date(11)
// console.log(birthday.format('MMM D, YYYY'))




// --------------------------------

// JS built-in date/time 

// Unix Epoch - Jan 1st, 1970 00:00:00
// const now = new Date();
// const timeStamp = now.getTime();

// // convert timeStamp to date
// const myDate = new Date(timeStamp);
// console.log(myDate.getFullYear());


// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of Month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Second: ${now.getSeconds()}`)