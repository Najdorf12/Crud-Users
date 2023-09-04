import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { UsersForm } from "./components/UsersForm";
import { UsersList } from "./components/UsersList";


function App() {
  
  const [usersList, setUsersList] = useState([]);
  const [userSelected , setUserSelected] = useState(null);

  const getAllUsers = () => {
    axios
      .get("http://localhost:8080/users")
      .then((resp) => setUsersList(resp.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const addUser = newUser => {
    axios
      .post("https://localhost:8080/users/", newUser)
      .then(() => {
        getAllUsers();
      })
      .catch((error) => console.error(error));
  };
  
  const deleteUser = id => {
    axios
      .delete(`https://localhost:8080/users/${id}/`)
      .then(() => getAllUsers())
      .catch((error) => console.error(error));
  }
  
  const selectUser = user =>{
    setUserSelected(user);
  }

  const editUser = user => {
    axios
      .put(`https://localhost:8080/users/${user.id}/`,user)
      .then(() =>{
        getAllUsers();
        setUserSelected(null);
      })
      .catch(error => console.error(error))
  }

  return (
    <>
     <h2>FORM</h2>
    <div className="app-container">
    <UsersForm 
      addUser= {addUser} 
      userSelected = {userSelected}
      editUser= {editUser}
      />

      <UsersList 
      usersList= {usersList} 
      deleteUser= {deleteUser}
      selectUser= {selectUser}
      />
    

    </div>
    </>
     
  );
}

export default App;
