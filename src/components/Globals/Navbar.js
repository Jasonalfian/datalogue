import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../images/datalogue.png'

export default class Navbar extends Component {

state={
    navbarOpen: false,
        css:"collapse navbar-collapse",
        links:[
            {
                id:1,
                path:'/Datasets',
                text:'Datasets'
            },
            {
                id:2,
                path:'/Infographics',
                text:'Infographics'
            }
            // ,{
            //     id:3,
            //     path:'/login',
            //     text:'Login'
            // }
        ]
}
 
navbarHandler=() => {
    console.log("Tes")
    this.state.navbarOpen?this.setState(
        {navbarOpen:false,css:"collapse navbar-collapse"})
        :this.setState({
            navbarOpen:true,
            css:"collapse navbar-collapse show"
        })
   }

    render() {
        return (

<nav data-sal="fade" data-sal-duration="1000" data-sal-easing="ease" className="navbar navbar-expand-md navbar-light">
<Link to="/" className="navbar-brand ml-lg-5 ml-0">
    <img  src={logo} alt="logo"/>
</Link>
<button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
  <span className="navbar-toggler-icon"></span>
</button>

<div className={this.state.css}>
<ul className="navbar-nav ml-auto mr-5">
{/* <form className="form-inline"> */}
        
        {/* Placeholder input searchbar */}
        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
             </form> */}
                        {this.state.links.map(link =>{
                            return (
                               <li key={link.id} className="nav-item navbarsize">
                                   <Link to={link.path} className="nav-link text-capitalized">
                                       {link.text}
                                   </Link>
                               </li> 
                            )
                        })}
            </ul>
 </div>

</nav>
        )
    }
}
