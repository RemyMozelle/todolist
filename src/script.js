

 const TodoList = () => {
     return {
         addTask : (id) => {
             return document.querySelector('#'+ id)
         },
         showTask : (id) => {
              return document.querySelector('#'+ id)
         },
         deleteTask : (id) => {
             return document.querySelector()
         }
     }
    
 }

TodoList().addTask('submitTask').addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e.target.valueTask.value)
})
