import { getNotes, createNote, removeNote, updateNote } from './notes'
import { getFilters, setFilters } from './filters'

// console.log(getNotes())
// createNote()
// removeNote('59fabbc3-06bc-4c7e-86fb-6770233db041')

// updateNote('2b9cd247-1bfb-4b12-835c-d1e96783f506', {
//     title: 'My note title',
//     body: 'this is a test note'
// })
// console.log(getNotes())

console.log(getFilters())
setFilters({
    searchText: 'office',
    sortBy: 'byCreated'
})

console.log(getFilters())