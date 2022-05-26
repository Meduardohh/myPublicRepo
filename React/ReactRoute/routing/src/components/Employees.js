import { database } from "../database/data"
import { Link } from 'react-router-dom';

const Employees=()=>{

    return (<div>
        {database.map((employee,index)=>{
            return <div key={`ind${index}`}>
                <Link to={`/employee/${employee.name}`}>To employee</Link>
                {employee.name}
            </div>
        })}
    </div>)

}


export default Employees