window.addEventListener("load",()=>{
    const form=document.querySelector("#new-task-form")
    const input=document.querySelector("#new-task-input")
    const list_element=document.querySelector("#tasks")

   form.addEventListener("submit",(e)=>{
       e.preventDefault()

       const task=input.value
       if(!task){
           alert("لطفا فرم را پر کنید")
           return
       }
       const task_element=document.createElement("div")
       task_element.classList.add("task")

       const task_content=document.createElement("div")
       task_content.classList.add("content")
            //    task_content.innerText=task 
        task_element.appendChild(task_content )



       const task_input=document.createElement("input")
       task_input.classList.add("text")
       task_input.value=task;
       task_input.type="text"




       task_content.appendChild(task_input)
       task_element.appendChild(task_content)

       
       const task_action=document.createElement("div")
       task_action.classList.add("actions")

   

       const task_delete=document.createElement("button")
       task_delete.classList.add("delete")
       task_delete.innerHTML="حذف  "

   
       task_action.appendChild(task_delete)

       task_element.appendChild(task_action)
          list_element.appendChild(task_element)

       input.value=""

          

       task_delete.addEventListener("click",()=>{
           list_element.removeChild(task_element)
       })
   })
})