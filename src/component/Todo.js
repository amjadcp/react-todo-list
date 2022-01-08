import {useState} from 'react'

const Todo =()=>{
    const [toDos, setToDos] = useState([]);
    return(

        <div>
            {/* <form className="d-flex justify-content-center align-items-center mb-4"> */}
                <div className="form-outline flex-fill">
                    <input type="text" name="todo" id="todo" className="form-control form-control-lg"/>
                    <label className="form-label">What do you need to do today?</label>
                </div>
            {/* </form> */}
            <button className="btn btn-primary btn-lg ms-2"
                onClick={
                    ()=>{
                        let task = document.getElementById("todo").value
                        document.getElementById("todo").value = ''
                        return setToDos([...toDos, {'task':task, 'status':false}])
                        }}
            >
            Add
            </button>
            {
                toDos.map( (data, key)=>{
                    return(
                        <div id={key} key={key}>
                          <ul className="list-group mb-0">
                              <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                                    <div className="d-flex align-items-center">
                                        <input className="form-check-input me-2" type="checkbox" value="" aria-label="..." 
                                            onChange={
                                                        (e)=>{
                                                            let i = toDos.indexOf(data)
                                                            toDos[i].status = e.target.checked
                                                            return setToDos([...toDos])
                                                        }
                                                    }
                                        />
                                        {data.status ? <strike>{data.task}</strike> : data.task}
                                    </div>
                                    <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
                                        <i className="fas fa-times text-primary"
                                             onClick={ ()=>{
                                                let i = toDos.indexOf(data)
                                                toDos.splice(i, 1)
                                                return setToDos([...toDos])
                                            }}
                                        ></i>
                                    </a>
                              </li>
                          </ul>

                        </div>
                    );
                })
            }
        </div>                   
    );

}

export default Todo;