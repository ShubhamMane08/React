export const AddTask = ({tasklist,setTasklist,task,setTask}) => {
  const handleSubmit=(e)=>{
   e.preventDefault();
   if(task.id)
   {

   }
   else
   {
    const date = new Date();
    const newTask = {id:date.getTime(),
      name:e.target.task.value,
      time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    };
    setTasklist([...tasklist,newTask]);
    e.target.task.value="";
   }

    

  }
    return (
      <section className="addTask">
          <form onSubmit={handleSubmit}>
              <input type="text" name="task" value={task.name} autoComplete="off" placeholder="add task" maxLength="25" />
              <button type="submit">Add</button>
          </form>
      </section>
    )
  }