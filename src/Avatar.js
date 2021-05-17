import React, { Component } from "react";
import "./Avatar.css";
import "tachyons";
import "./AvatarList";
import AvatarList from "./AvatarList";

//note:>>>>  agar state use krna hai to class component me use kr sakte hai, functional component me use nhi kr sakte
//note:>>> class component me agar kuchh bhi change krna ho to state use krna hai
//https://tachyons.io/docs/
//https://joeschmoe.io/
//https://fonts.google.com/specimen/Gugi?query=gugi&selection.family=Gugi


// const Avatar = (props) => {
  
  class Avatar extends Component {
    
    constructor(){
        super();
        this.state={
            name:"Welcome to Avatar World"
        }
    }

    nameChange(){
        this.setState({
            name:"Subscribe ......."
        })
    }


    render() {
        const avatarListArray = [
            {
              id: 1,
              name: "Anand",
              work: "web dev",
            },
            {
              id: 2,
              name: "Rohit",
              work: "Projec Mng",
            },
            {
              id: 3,
              name: "Krishna",
              work: "Dev Eng",
            },
            {
              id: 3,
              name: "Kum",
              work: "Dev Eng",
            },
          ];

 const avatarCard = avatarListArray.map((avatarCard, i) => {
      return (
        <AvatarList key={i}
          id={avatarListArray[i].id}
          name={avatarListArray[i].name}
          work={avatarListArray[i].work}
        />
      );
    });


      return (
        <div className="mainpage">
          <h1>{this.state.name}</h1>
          {avatarCard}
          <button onClick={()=>this.nameChange()}>Subscribe</button>
        </div>
      );
    }
  }

  //     debugger
  //   const avatarListArray = [
  //     {
  //       id: 1,
  //       name: "Anand",
  //       work: "web dev",
  //     },
  //     {
  //       id: 2,
  //       name: "Rohit",
  //       work: "Projec Mng",
  //     },
  //     {
  //       id: 3,
  //       name: "Krishna",
  //       work: "Dev Eng",
  //     },
  //     {
  //       id: 3,
  //       name: "Kum",
  //       work: "Dev Eng",
  //     },
  //   ];

  //  const avatarCard = avatarListArray.map((avatarCard, i) => {
  //     return (
  //       <AvatarList
  //         id={avatarListArray[i].id}
  //         name={avatarListArray[i].name}
  //         work={avatarListArray[i].work}
  //       />
  //     );
  //   });

  //   return (
  //     <div className="mainpage">
  //       <h1>Welcome to Avatar</h1>
  //       {avatarCard}
  //       <button>Subscribe</button>
  //     </div>
  //   );
//};

export default Avatar;
