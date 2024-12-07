import './sidebar.css'
import React from 'react';
import { Link } from 'react-router';


class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link to={this.props.to} >
                <div className="sidebar-cont">
                    <div className="sidebar-btn">{this.props.icon}</div>
                    <p className="sidebar-cont-text">{this.props.title}</p>
                </div>
           </Link>
           )
    }
}
export default Sidebar;