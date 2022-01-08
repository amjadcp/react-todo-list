import {useState} from 'react'

const Todo =()=>{
    const [toDos, setToDos] = useState([]);
    return(

        <div>
            <input type="text" name="todo" id="todo" />
            &nbsp;&nbsp;
            <button onClick={
                ()=>{
                    let task = document.getElementById("todo").value
                    document.getElementById("todo").value = ''
                    return setToDos([...toDos, {'task':task, 'status':false}])
                    }}>
            Add
            </button>
            <br />

            {
                toDos.map((data, key)=>{
                    return(
                            <div id={key} key={key}>
                                    {data.status ? <strike>{data.task}</strike> : data.task}
                                    <input type="checkbox" name={data.task} id={data.task} value={data.task}

                                        onChange={
                                            (e)=>{
                                                let i = toDos.indexOf(data)
                                                toDos[i].status = e.target.checked
                                                return setToDos([...toDos])
                                                            // toDos.filter(data_copy=>{
                                                            //     if(data_copy.task === data.task){
                                                            //         data_copy.status = e.target.checked
                                                            //     }
                                                            //     return data_copy
                                                            // })
                                                console.log(toDos);
                                            }
                                        }
                                    />
                                    <button
                                       onClick={ ()=>{
                                           let i = toDos.indexOf(data)
                                           toDos.splice(i, 1)
                                           return setToDos([...toDos])
                                       }}
                                    >
                                        Delete
                                    </button>
                            </div>
                    )
                })
            }
        </div>

    );

}

export default Todo;

