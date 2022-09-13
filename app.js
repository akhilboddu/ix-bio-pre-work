document.querySelector('#btn').addEventListener('click', (e) => {
    console.log(textToggler(e.target.innerHTML))
    e.target.innerHTML = textToggler(e.target.innerHTML)
    
  });
  
  const textToggler = (text) => {
    if(text == 'Knock! Knock!') {
      return 'Who is out there?';
    }
    if(text == 'Who is out there?') {
      return 'Doctor.';
    }
    if(text == 'Doctor.') {
      return 'Doctor Who?';
    }
    if(text == 'Doctor Who?') {
      return 'No! Doctor Strange!';
    }
    if(text == 'No! Doctor Strange!') {
      return 'Liked that or no?';
    }
    if(text == 'Liked that or no?') {
      return 'Lots of cool other things we shall do!';
    }
    if(text == 'Lots of cool other things we shall do!') {
      return 'Woah! stop now!';
    }
    if(text == 'Woah! stop now!') {
      return 'I will see you on zoom, bye bye';
    }
    return'Knock! Knock!';
  }