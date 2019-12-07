
//variables declared and general functions 
var username=[];
var password=[];
var funds_user1=0;
var cat_user1 =[];
var funds_user2=0;
var cat_user2 =[];
var funds_user3=0;
var cat_user3 =[];

function clearText(object,l){
  for (var i = 0; i < l; i++) {
    setText(object+i,"");
  }}
function simpleClear(object){
  setText(object,"");
}  

/// login sections
onEvent("Home", "click", function() {
  console.log("Home clicked!");
  setScreen("Welcome");
});
onEvent("makeAccount", "click", function() {
  console.log("makeAccount clicked!");
  setScreen("create_account");
});
onEvent("create_account_info", "click", function() {
  console.log("create_account_info clicked!");
  if (getText("input1")!=getText("input2")){
    setText("text_area1","Your passwords don't match");
  }
  else if(getText("input1")==[]&& getText("input2")==[]){
    setText("text_area1","You left your passwords blank. Please enter a password");
  }
  else if(getText("input1")==getText("input2")){
  appendItem(username,getText("input0"));
  appendItem(password,getText("input1"));
  setScreen("LoginScreen");}
  clearText("input",3);
  Deletepasswords();
  DeleteUsernames();
});
function Deletepasswords(){
  if(password.length>3){
    for (var i = password.length; i > 3; i--) {
      removeItem(password, i-1);
        }}}
function DeleteUsernames(){
  if(username.length>3){
    for (var i = username.length; i > 3; i--) {
      removeItem(username, i-1);
        }}}
function checkUser(listIndex,user){
  if(getText("enterUserName")==username[listIndex]&& getText("enterPassword")==[password[listIndex]]){
    setScreen(user);
  }
}

onEvent("Login", "click", function() {
  checkUser(0,"User1");
  checkUser(1,"User2");
  checkUser(2,"User3");
  simpleClear("enterUserName");
  simpleClear("enterPassword");
});

onEvent("login_screen", "click", function() {
  console.log("login_screen clicked!");
  setScreen("LoginScreen");
});

onEvent("goBack", "click", function() {
  console.log("goBack clicked!");
  setScreen("create_account");
});


//function for account funds/cat setup

function fundsCatCreation(fundsButton,fundslist,fundsText,budgetText,catButton,catList,catText){
  onEvent(fundsButton, "click", function() {
  console.log( fundsButton+"clicked!");
  fundslist = fundslist+getNumber(fundsText);
  console.log(fundslist);
  setText(budgetText,"You entered that you have " + fundslist + ". You also have these catogories: " + catList);
});

onEvent(catButton, "click", function() {
  console.log(catButton+ "clicked!");
  appendItem(catList,getText(catText));
  simpleClear(catText);
  setText(budgetText,"You entered that you have " + fundslist + "You also have these catogories: " + catList);
});
 
}

//calls for all three users 
fundsCatCreation("Enter_user1",funds_user1,"TotalFunds_user_1","Budget1","addCat1",cat_user1,"categories_user1");
fundsCatCreation("Enter_user2",funds_user2,"TotalFunds_user_2","Budget2","addCat2",cat_user2,"categories_user2");
fundsCatCreation("Enter_user3",funds_user3,"TotalFunds_user_3","Budget3","addCat3",cat_user3,"categories_user3");

//update global variable because functions decide to lose the value of the variable after completion. That backfired
onEvent("Enter_user1", "click", function() {
  
  funds_user1= funds_user1+getNumber("TotalFunds_user_1");
});
onEvent("Enter_user2", "click", function() {
  
  funds_user2= funds_user2+getNumber("TotalFunds_user_2");
});
onEvent("Enter_user3", "click", function() {
  
  funds_user3= funds_user3+getNumber("TotalFunds_user_3");
});

//moving to the actual budget page deciding to do each seperatly instead of one function. Functions make me lose the value of my updated total funds variable

//user 1 budget
onEvent("Finalize_user1", "click", function() {
  console.log("Finalize_user1 clicked!");
  setScreen("BudgetUser1");
  setText("FundsUser1","You have "+ funds_user1 + " to work with. These funds need to be divided up into "+ cat_user1.length + " catorgories. Enter the amount you would like to budget into each box and then click the box when you are ready to submit that amount. Keep going until you have budgeted all your funds. The text area will serve to keep you updated");
 
  for (var i = 0; i < 5; i++) {
  setText("cat"+i,cat_user1[i]);
  }
  
});

onEvent("EnterU1", "click", function() {
  for (var i = 0; i < 5; i++) {
    funds_user1= funds_user1-getNumber("money"+i);
  }
  setText("FundsUser1","You entered " + getText("money0")+ " into " +cat_user1[0]+  ". You entered " + getText("money1")+ " into " +cat_user1[1]+ ". You entered " + getText("money2")+ " into " +cat_user1[2]+ ". You entered " + getText("money3")+ " into " +cat_user1[3]+". You entered " + getText("money4")+ " into " +cat_user1[4]+   ". You have " + funds_user1 + " remaining to work with!" );
  clearText("money",5);
  
});

onEvent("LogoutU1", "click", function() {
  console.log("Logout clicked!");
  setScreen("Welcome");
});
// user 2 budget  
onEvent("Finalize_user2", "click", function() {
  console.log("Finalize_user2 clicked!");
  setScreen("BudgetUser2");
  setText("FundsUser2","You have "+ funds_user2 + " to work with. These funds need to be divided up into "+ cat_user2.length + " catorgories. Enter the amount you would like to budget into each box and then click the box when you are ready to submit that amount. Keep going until all your funds have been budgeted. The text area will serve to keep you updated");
 
  for (var i = 0; i < 5; i++) {
  setText("Scat"+i,cat_user2[i]);
  }
  
});

onEvent("EnterU2", "click", function() {
  for (var i = 0; i < 4; i++) {
    funds_user2= funds_user2-getNumber("2money"+i);
  }
  setText("FundsUser2","You entered " + getText("Smoney0")+ " into " +cat_user2[0]+  ". You entered " + getText("Smoney1")+ " into " +cat_user2[1]+ ". You entered " + getText("Smoney2")+ " into " +cat_user2[2]+ ". You entered " + getText("Smoney3")+ " into " +cat_user2[3]+". You entered " + getText("Smoney4")+ " into " +cat_user2[4]+   ". You have " + funds_user2 + " remaining to work with!" );
  clearText("Smoney",5);
  
});
onEvent("LogoutU2", "click", function() {
  console.log("Logout clicked!");
  setScreen("Welcome");
});
// budget user3
onEvent("Finalize_user3", "click", function() {
  console.log("Finalize_user3 clicked!");
  setScreen("BudgetUser3");
  setText("FundsUser3","You have "+ funds_user3 + " to work with. These funds need to be divided up into "+ cat_user3.length + " catorgories. Enter the amount you would like to budget into each box and then click the box when you are ready to submit that amount. Keep going until all your funds have been budgeted. The text area will serve to keep you updated");
 
  for (var i = 0; i < 5; i++) {
  setText("Scat"+i,cat_user2[i]);
  }
  
});

onEvent("EnterU3", "click", function() {
  for (var i = 0; i < 4; i++) {
    funds_user3= funds_user3-getNumber("Tmoney"+i);
  }
  setText("FundsUser3","You entered " + getText("Tmoney0")+ " into " +cat_user3[0]+  ". You entered " + getText("Tmoney1")+ " into " +cat_user3[1]+ ". You entered " + getText("Tmoney2")+ " into " +cat_user3[2]+ ". You entered " + getText("Tmoney3")+ " into " +cat_user3[3]+". You entered " + getText("Tmoney4")+ " into " +cat_user3[4]+   ". You have " + funds_user3 + " remaining to work with!" );
  clearText("Tmoney",5);
  
});
onEvent("LogoutU3", "click", function() {
  console.log("Logout clicked!");
  setScreen("Welcome");
});

