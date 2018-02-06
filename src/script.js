

 const TodoList = () => {
     return {
         addTask : (id) => {
             return document.querySelector('#'+ id)
         },
         showAllTask : (id) => {
              return document.querySelector('#'+ id)         
         },
         deleteTask : (id) => {
             const allTask = document.querySelectorAll('li')
         }
     } 
 }

     TodoList().addTask('submitTask').addEventListener('submit',(e)=>{
        e.preventDefault()
        const li = document.createElement('li');
        li.innerHTML = e.target.valueTask.value;
        TodoList().addTask('task').appendChild(li)
        e.target.reset();
    })

// const allTask = [];
// //Ajouter au tableau les élèments du submit
//         TodoList().addTask('submitTask').addEventListener('submit', callbackTask);

//             function callbackTask (e) {
//                 e.preventDefault()
//                 allTask.push(e.target.valueTask.value)
//                 e.target.reset();
//             listTask();
            
//         }
//         const listTask = () => {
//             allTask.map((task)=>{
//                 let li = document.createElement('li')  
//                 li.innerHTML = task;
//                 console.log(task)
//                 TodoList().addTask('task').appendChild(li) 
//                 return ;
                    
//                     console.log('ook')     
//             })
//         }
//Créer des li avec une boucle map
