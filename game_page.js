p1_name=localStorage.getItem("player_1");
p2_name=localStorage.getItem("player_2");
document.getElementById("player_1_name").innerHTML=p1_name + " :";
document.getElementById("player_2_name").innerHTML=p2_name + " :";
p1_score= 1 ;
p2_score= 1 ;
document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;
document.getElementById("player_question").innerHTML="question turn " + p1_name;
document.getElementById("player_answer").innerHTML="answer turn " + p2_name;

function send(){
     num1=document.getElementById("num1").value;
     num2=document.getElementById("num2").value;
     actual_answer=parseInt(num1)*parseInt(num2);
     question_number="<h4>" + num1 + "X" + num2 + "</h4>";
     input_box="<br>Answer : <input type='text' id='input_box_check'";
    checkbutton="<br><button class='btn btn-warning' onclick='check()'>Check</button>"
    row= question_number + input_box + checkbutton;
   document.getElementById("output").innerHTML=row;
   document.getElementById("num1").value="";
   document.getElementById("num2").value="";
}
question_turn="player1";

answer_turn="player2";
 function check(){

   answer=document.getElementById("input_box_check").valuez
   console.log("answer in lower case" + answer); 
   if(answer==actual_answer){
      console.log("thats a right answer");
    if (answer_turn=="player1"){
      p1_score= p1_score + 1 ;
   document.getElementById("player1_score").innerHTML=p1_score;
   }
   else{
      p2_score==p2_score + 1;
     document.getElementById("player2_score").innerHTML=p2_score;
   }
}
if (question_turn=="player1"){
    question_turn="player2";
 document.getElementById("player_question").innerHTML="Question Turn - " + p2_name;
 }
 else{
    question_turn="player1";
 document.getElementById("player_question").innerHTML="Question Turn - " + p1_name;
 }
 if (answer_turn=="player1"){
   answer_turn="player2";
document.getElementById("player_answer").innerHTML="answer Turn - " + p2_name;
}
else{
   answer_turn="player1";
document.getElementById("player_answer").innerHTML="answer Turn - " + p1_name;
}
 }