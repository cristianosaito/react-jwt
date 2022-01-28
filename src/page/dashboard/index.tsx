
import React from 'react';
import { useNavigate } from "react-router-dom";
import { removeUserSession } from '../../utils/Common';
 
function Dashboard(props:any) {
 
  let navigate = useNavigate();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    navigate('/login');
  }

  return (
    <div>
      Welcome User!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;