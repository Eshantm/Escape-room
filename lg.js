var usern = document.getElementById("username");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAsYq-N7gyu9UFhyG_4eGa6LNqRgVrtG5w",
  authDomain: "form-35022.firebaseapp.com",
  databaseURL: "https://form-35022.firebaseio.com",
  projectId: "form-35022",
  storageBucket: "form-35022.appspot.com",
  messagingSenderId: "1002122491475",
  appId: "1:1002122491475:web:b98f5c0d3a94e15c97b8a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const auth= firebase.auth();

  function signUp(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var username = document.getElementById("username");


    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));



    alert("Signed Up");


  }
   function writeUserData(){
      var database = firebase.database();
      firebase.database().ref('users/').set({
      username:document.getElementById("username").value,
      email:document.getElementById("email").value

       });
       alert("done");
   }



  function signIn(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed In" + email.value);



  }


  function signOut(){

    auth.signOut();
    alert("Signed Out");

  }
  function google(){
    provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(function(result){
      var token =result.credential.accessToken;
      var user = result.user;
      console.log("sucess");
    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorMessage);
      console.log("failed");
    });

  }
  function facebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider).then(function(result){
      var token =result.credential.accessToken;
      var user = result.user;
      console.log("sucess");
    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorMessage);
      console.log("failed");
    });

  }
  function github(){
    var provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider).then(function(result){
      var token =result.credential.accessToken;
      var user = result.user;
      console.log("sucess");
    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorMessage);
      console.log("failed");
    });

  }

  auth.onAuthStateChanged(function(user){

    if(user){

      var email = user.email;
      alert("Active User " + email);
      var user = firebase.auth().currentUser;

      user.sendEmailVerification().then(function() {
        alert("confirmation email sent");

      }).catch(function(error) {
// An error happened.
});



    }else{

      alert("No Active User");
      //no user is signed in
    }



  });
