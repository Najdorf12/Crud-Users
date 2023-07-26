


export function UsersList({ usersList, deleteUser, selectUser }) {
  
  
  
  
    return (
    <>
      <div className="user-container">
        <ul>
          {usersList?.map((user) => {
            return (
              <li key={user.id} className="user">
                <p><span>First name</span></p>  {user.first_name} 
                <p><span>Last name</span></p> {user.last_name} 
                <p><span>Email</span></p> {user.email} 
                <p><span>Password</span></p> {user.password} 
                <p><span>Birthday</span></p> {user.birthday} 
                
                <div className="btn-container">
                <button className="btn-edit"
                onClick={() => selectUser(user)}>
                  <i className='bx bxs-edit-alt'></i> 
                </button>
                
                <button className="btn-delete"
                onClick={() => deleteUser(user.id)}>
                  <i className='bx bxs-trash'></i>
                </button>
               
                </div> 
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
