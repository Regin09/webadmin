import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    const { dispatch  } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">AdminOver</span>
            </Link>
        </div>
        <hr />
    <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className="icon" /> 
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none"}}>
            <li>
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
            </li>
            </Link>

            <Link to="/products" style={{ textDecoration: "none"}}>
            <li>
                <StorefrontIcon className="icon" />
                <span>Products</span>
            </li>
            </Link>
            <li>
                <WalletOutlinedIcon className="icon" />
                <span>Orders</span>
            </li>
            <li>
                <LocalShippingIcon className="icon" />
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <BarChartOutlinedIcon className="icon" />
                <span>Stats</span>
            </li>
            <li>
                <NotificationsNoneOutlinedIcon className="icon"/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                <span>System Health</span>
            </li>
            <li>
                <PsychologyOutlinedIcon className="icon"/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsApplicationsOutlinedIcon className="icon"/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                <PersonOutlineOutlinedIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutOutlined className="icon"/>
                <span>LogOut</span>
            </li>
        </ul>
    </div>
    <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>

    </div>
    </div>
  )
}

export default Sidebar