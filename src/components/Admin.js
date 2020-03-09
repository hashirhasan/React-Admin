import React from 'react';
import '../App.css';
import Viewusers from './Viewusers';
import Adduser from './Adduser';
class Admin extends React.Component{
  state={
    users:[
      {
        id:1,
        name:'Harry',
        username:'harsh',
        email:'hasan@gmail.com',
        address:{city:'gkp'},
        phone_no:'34567',
        website:'jhgfdsa.qwe'
      },
      {
        id:2,
        name:'Harry',
        username:'harsh',
        email:'hasan@gmail.com',
        address:{city:'gkp'},
        phone_no:'34567',
        website:'jhgfdsa.qwe'
      },
      {
        id:3,
        name:'Harry',
        username:'harsh',
        email:'hasan@gmail.com',
        address:{city:'gkp'},
        phone_no:'34567',
        website:'jhgfdsa.qwe'
      },
      {
        id:4,
        name:'Harry',
        username:'harsh',
        email:'hasan@gmail.com',
        address:{city:'gkp'},
        phone_no:'34567',
        website:'jhgfdsa.qwe'
      }
    ],
    isseen:true

  }



  //delete user
 delUser=(id)=>{
  this.setState({users:[...this.state.users.filter(user=>user.id!==id)]})
 }

 //show form
 showform=()=>{
    this.setState({isseen:!this.state.isseen})
 }
 hideform=()=>{
    this.setState({isseen:!this.state.isseen})
 }

 addUser=(newuser)=>{
    this.setState({users:[...this.state.users,newuser]})
 }

 editUser=(edituser)=>{
     console.log(edituser)
     this.setState({users:[...this.state.users.filter(user=>user.id!==edituser.id)]})
     this.setState({users:[...this.state.users,edituser]})
 }

  render(){
   
    return(
      <div className="container text-center">
         {this.state.isseen? 
         ( <button onClick={this.showform} className="btn btn-lg btn-success mt-1">ADD USER</button>):
         (<button onClick={this.showform}  className="btn btn-lg btn-success mt-1">Close</button>)
         }
          <Adduser  isseen={this.state.isseen}  hideform={this.hideform}  addUser={this.addUser}/>

       <Viewusers  users={this.state.users} delUser={this.delUser} editUser={this.editUser}/>    
    </div>
    );
  }
}

export default Admin;