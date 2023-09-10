const firebaseConfig = {
    apiKey: "AIzaSyDdjxsZKPyAI2gdsNkWUGmw3EdPKSHNADI",
    authDomain: "contact-form-a2c2b.firebaseapp.com",
    databaseURL: "https://contact-form-a2c2b-default-rtdb.firebaseio.com",
    projectId: "contact-form-a2c2b",
    storageBucket: "contact-form-a2c2b.appspot.com",
    messagingSenderId: "67420030332",
    appId: "1:67420030332:web:2f191bde958c237b0bd0f9"
  };

  //initialize firebase 
  firebase.initialize(firebaseConfig);

  //reference your database
   var contactFormDB =firebase.database().ref("C:\Users\maner\OneDrive\Desktop\hair_salon-master\contac_us.html");

   document.getelementById("contact_us.html").addEventListener("sumbit", submitform);

   function submitform(e){
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var subject = getElementVal("subject");
    var message = getElementVal("message");

    console.log(name, emailid ,subject ,message);


   }

   const getElementVal = (id)=>{
    return document.getElementById(id).Value;
   }