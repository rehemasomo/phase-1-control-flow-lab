function scuberGreetingForFeet(feet){
  // Write your code here!
  let result;
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    return  'I will gladly take your thirty bucks.';
  } else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  } else  {
    return 'No can do.';
  }
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }

}

