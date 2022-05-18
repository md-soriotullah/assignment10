/**
 * # Create an email pattern 
 */
 let emaill = "soriotullah96@gmail.com";
 let ptrnm = /^[a-z0-9_.]*@[a-z]{3,}\.[a-z]{2,5}$/;
 console.log(ptrnm.test(emaill));


 /**
  * # Create a  username pattern
  */
 let username = "soriotullah";
 let ptrnu = /^[a-z0-9]{6,}$/;
 console.log(ptrnu.test(username));



 /**
  * # Create a Bangladeshi phone number pattern
  */
  let numbr = "01780978357";
  let ptrn1 = /^(\+880|0|00880)[0-9]{10}$/;
  console.log(ptrn1.test(numbr));


  /**
   * # Create a password pattern 
   */
  let password = "Strongpass12@$";
  let petrnp = /^[A-Za-z0-9@#$%&]{6,}$/;
  console.log(petrnp.test(password));



  /**
   * # Create a zipcode pattern
   */
  let zipcode = "5100";
  let petrnz = /^[0-9]{3,6}$/;
  console.log(petrnz.test(zipcode));

