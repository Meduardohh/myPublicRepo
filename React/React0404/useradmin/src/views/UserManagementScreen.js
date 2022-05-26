import { useEffect, useState } from "react";

import { readUser } from "../services/crud";

const UserManagementScreen = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    readUser()
      .then((data) => setUserList(data.val()))
  }, []);

  return (
    <div>
     {userList.forEach((user)=>{

     })}
    </div>
  );
};

export default UserManagementScreen;
