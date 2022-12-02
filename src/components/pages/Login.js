import React,{usersFound,users } from 'react';
import Footer from '../childrens/Footer';
import Header from '../childrens/Header';


class Login extends React.Component {

  //Creation de la fonction pour le bouton logout qui recharge la page et clear //

  logout = () => {
    window.location.reload(false);
    localStorage.clear();
    sessionStorage.clear();
  }

  //creation de la fonction pour le coté login //

  onSubmit = () => {
    let inputPassword = document.getElementById('passwordInput');
    let inputMail = document.getElementById('mailInput');
    let erreur = document.getElementById('erreur');
    let log = false;
    let i;
    let user;
    let users = [
      ['Atif', 'zourgani', 'atif@gmail.com', 'devDu33!', 'user'],
      ['Diego', 'toto', 'diego@gmail.com', 'diegoDu33', 'user'],
      ['Arthur', 'titi', 'arthur@gmail.com', 'arthurDu33', 'user'],
      ['Emma', 'tata', 'emma@gmail.com', 'emmaDu33', 'user'],
      ['Agathe', 'tata', 'emma@gmail.com', 'emmaDu33', 'user'],
      ['Romain', 'tata', 'emma@gmail.com', 'emmaDu33', 'user'],
      ['John', 'tata', 'emma@gmail.com', 'emmaDu33', 'user'],
      ['Chloé', 'tata', 'emma@gmail.com', 'emmaDu33', 'user'],
  ];
  
  //Creation de la fonction eet de la boucle for each pour mon tableau USERS puis creation du tableau ..//

  let showUser = document.getElementById("showUsers");

  function showUsers () {
      users.forEach((e , k) => {
          let trElement = document.createElement("tr");
          for ( i = 0 ; i < e.length ; i++ ) {
          let btnElement = document.createElement('button');
          let buttonText = document.createTextNode("Delete");
          let tdElement =document.createElement("td");
          btnElement.appendChild(buttonText);
          trElement.appendChild(tdElement);
          let tdContent = document.createTextNode(users[k][i]);
          tdElement.appendChild(tdContent);
          tdElement.appendChild(btnElement);

     

  }


  
  document.getElementById('tableUser').appendChild(trElement);
      })}

 //Delaration des retours suite au login //     

    users.forEach((user, i) => {
      if(inputMail.value == user[2] && inputPassword.value == user[3] && inputMail.value){
          log = true;
          return
      }
  })
      if(log == true){
       erreur.innerHTML = 'Bienvenue sur VidDev'
      }if(inputMail.value == 'admin' && inputPassword.value == 'admin'){
          showUsers()
      }else{
      erreur.innerHTML = 'Mot de passe ou mail incorrect';
      }
      }

  render() {
    return (
      <div>
      <Header/>
      <section id='form'>
        <div id='formDiv'>
          <input id='mailInput' placeholder="email" type="email" />
          <input id='passwordInput' placeholder="password" type="password" />
          <button onClick={this.onSubmit}>Login</button>
          <button onClick={this.logout}>Logout</button>
          <a>Mot de passe oublié?</a>
          <button>Créer compte</button>
          <span id='erreur'></span>
        </div>
        <div id="showUsers">
            <table id="tableUser"></table>
        </div>
      </section>
      <Footer/>
      </div>
      
    )
  }
}

export default Login;