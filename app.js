//Aquí debemos poner el código del primer producto 
//y no OLVIDES DARLE CTRL+S para guardar los cambios ;)

function menu(option) {
    (option == 1) ? alert('No tenemos ceviche, pero hay tacos al pastor') :
      (option == 2) ? alert('No tenemos tacos al pastor, pero hay empanada chilena') :
        (option == 3) ? alert('No tenemos empanada chilena, pero hay hamburguesa') :
          (option == 4) ? alert('Gracias por su compra!!!') :
            (option == 5) ? alert('Regrese pronto!!!') : alert('No tenemos esa opción!!!');
  }
  
  do {
    var strMenu = '1. Ceviche\n2. Tacos al pastor\n3. Empanada chilena\n4. Hamburguesa\n5. Salir';
    var option = prompt('¿Qué desea comer?: \n' + strMenu);
  
    menu(option);
  } while ((option != 4) && (option != 5));