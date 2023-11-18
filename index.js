//let defaultBackGround = true;
/*
document.querySelector('.js-sun-moon-button')
  .addEventListener('click', () => {
    const body = document.body;
    const buttons = document.querySelectorAll('button');

    body.classList.add('white-mode');
    buttons.forEach(buttons => {
      buttons.classList.add('white-mode-button');
    });
    
    
    if(!body.classList.contains('white-mode')) {
      body.classList.add('white-mode');
      buttons.classList.add('white-mode-button');
      buttons.forEach(buttons => {
        buttons.classList.add('white-mode-button');
      });
      defaultBackGround = false;
    } else {
      body.classList.remove('white-mode');
      buttons.forEach(buttons => {
        buttons.classList.remove('white-mode-button');
      });
      defaultBackGround = true;
    }
    
    
    
    
    
    /*
    if(defaultBackGround) {
      body.style.backgroundColor = 'rgb(255, 255, 255)';
      body.style.color = 'rgb(0, 0, 0)';
      defaultBackGround = false;
      buttons.forEach(button => {
        button.style.border = '1px solid rgb(0, 0, 0)';
      });
    } else {
      body.style.backgroundColor = 'rgb(0, 0, 0)';
      body.style.color = 'rgb(255, 255, 255)';
      defaultBackGround = true;
    }*/
  //});

//let defaltuButton = true;


/*
meuBotao.addEventListener('click', function() {
  meuBotao.classList.add('destacado');
});*/

//let defaultBackGround = true;

document.querySelector('.js-sun-moon-button')
  .addEventListener('click', () => {
    const body = document.body;
    const buttons = document.querySelectorAll('button');

    if (!body.classList.contains('white-mode')) {
      body.classList.add('white-mode');
      buttons.forEach(button => {
        button.classList.add('white-mode-button');
      });
      //defaultBackGround = false;
    } else {
      body.classList.remove('white-mode');
      buttons.forEach(button => {
        button.classList.remove('white-mode-button');
      });
      //defaultBackGround = true;
    }
  });
