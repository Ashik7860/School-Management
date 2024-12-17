import {React ,useState} from 'react'
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {

  const fetchUserData = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user || { username: 'John Doe', role: 'Admin' }; // Mock data
  };

  const [showModal, setShowModal] = useState(false); 
  const [userData, setUserData] = useState(null);

  const [toggleSidebar,setToggleSidebar]=useState(false);

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleLogout=()=>{
        dispatch(logout());
        navigate("/signin");
    }
    const handleSidebar=()=>{
      setToggleSidebar(!toggleSidebar);
    }

    const handleProfileClick = () => {
      const user = fetchUserData(); 
    setUserData(user); 
    setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false); 
    }

    const handleChangePassword=()=>{
      navigate ("/changePassword")
    }

  return (
    <div className="bg-navbarBackground w-full h-12 flex items-center px-4">
      {/* Sidebar Toggle Button */}
      <button onClick={handleSidebar} className="text-primary">
        <IoReorderThree className="w-8 h-8" />
      </button>

      {/* Logout Button */}
      <button
        className="ml-auto flex items-center text-primary p-2"
        onClick={handleLogout}
      >
        <MdOutlineLogout className="w-8 h-8" />
      </button>

      {/* Sidebar (conditionally rendered) */}
      {toggleSidebar && (
        <div className="fixed top-0 left-0 w-64 h-full bg-secondary text-primary shadow-lg z-50">
          <button
            onClick={handleSidebar}
            className="absolute top-2 right-2 text-primary"
          >
            <IoReorderThree className='h-9 w-9'/>
          </button>
          <ul className="p-6 mt-8">
            
            <li className="mb-4" onClick={handleProfileClick}>Profile</li>
            <li className="mb-4" onClick={handleChangePassword}>Change Password</li>

          </ul>
        </div>
      )}

{showModal && userData && (
        <div className="fixed top-0 left-0 w-full h-full bg-secondary bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-primary p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Profile Details</h2>
            <div className="mb-4">
              <p><strong>Username:</strong> {userData.username}</p>
              <p><strong>Role:</strong> {userData.role}</p>
            </div>
            <button
              onClick={closeModal}
              className="bg-primary p-2 rounded-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar
