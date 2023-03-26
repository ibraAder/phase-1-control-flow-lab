function scuberGreetingForFeet(){
  if(feet<=400){
    return"This one is on me!";
  }
  else if(feet>2000 && feet<=2500){
    return'I will gladly take your thirty bucks.';
  }
  else if(feet>2500){
    return'No can do.';
  }
}

function ternaryCheckCity(){
 return (city==='New York') ?'Ok, sounds good.' : "No go.";
}

function switchOnCharmFromTip(){
  switch(tip){

    case 'Generous':
    return'Thank you so much.';
    break;

    case'not as generous':
    return"Thank you.";
    break;


    default:'thanks for everything'
    return"Bye";

 }
}