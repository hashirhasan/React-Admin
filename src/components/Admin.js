import React from 'react';
import '../App.css';
import Viewusers from './Viewusers';
import Adduser from './Adduser';
import swal from 'sweetalert';
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
        name:'shreya',
        username:'shru',
        email:'shreya@gmail.com',
        address:{city:'ert'},
        phone_no:'34dfk567',
        website:'asdfg.qwe'
      },
      {
        id:3,
        name:'shivam',
        username:'shivi',
        email:'hsthhn@gmail.com',
        address:{city:'lko'},
        phone_no:'345dffg67',
        website:'jhgffvfdsa.qwe'
      },
      {
        id:4,
        name:'fahad',
        username:'fraudh',
        email:'hdfdvn@gmail.com',
        address:{city:'gkp'},
        phone_no:'3433447',
        website:'daswer.qwe'
      }
    ],
    isseen:true

  }



  //delete user
 delUser=(id)=>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover !",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("User deleted!", {
            icon: "success",
          });
          this.setState({users:[...this.state.users.filter(user=>user.id!==id)]})
        }
      });

 }

 //show form
 showform=()=>{
    this.setState({isseen:!this.state.isseen})
 }
 hideform=()=>{
    this.setState({isseen:!this.state.isseen})
 }

 addUser=(newuser)=>{
    swal("Created!", "User Created!", "success");
    this.setState({users:[...this.state.users,newuser]})
 }

 editUser=(edituser)=>{
    swal("Updated!", "User details Updated!", "success");
     console.log(edituser)
     this.setState({users:[...this.state.users.filter(user=>user.id!==edituser.id),edituser]})
   
    
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