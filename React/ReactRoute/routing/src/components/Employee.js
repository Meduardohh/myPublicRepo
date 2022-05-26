import { useParams } from "react-router-dom";
import { database } from "../database/data";

const Employee = () => {
  const { name } = useParams();

  const employee = database.filter((employee) => employee.name === name);
  console.log(employee);

  return <div>{`${employee[0].name} adatlapja`}</div>;
};

export default Employee;
