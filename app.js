//alert('Bienvenidos');

// Archivo JavaScript

fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    // Ahora, 'data' contiene el objeto JSON
    console.log(data.length);
    const categoryElements = document.querySelectorAll('.category');
    const scoreElements = document.querySelectorAll('.score');
    const iconElements = document.querySelectorAll('.icon');
    const scoreProm = document.getElementById('burbuja');
    data.forEach((item, i) => {
        // Actualizar el contenido de cada elemento
        categoryElements[i].textContent = `${item.category}`;
        scoreElements[i].textContent = `${item.score}`;
        iconElements[i].src = item.icon;
        iconElements[i].alt = 'Icono';
        let icono1 = iconElements[0].src;
        let icono2 = iconElements[1].src;
        let icono3 = iconElements[2].src;
        let icono4 = iconElements[3].src;
        let score1 = parseInt(scoreElements[0].textContent);
        let score2 = parseInt(scoreElements[1].textContent);
        let score3 = parseInt(scoreElements[2].textContent);
        let score4 = parseInt(scoreElements[3].textContent);
        //Insertar los iconos desde javascript
        switch (i) {
            case 0:
                const iconoUno = document.getElementById('icon_reaction');
                const iconOneElement = document.createElement('img');
                iconOneElement.src = icono1;
                iconoUno.appendChild(iconOneElement);
                break;
            case 1:
                const iconoDos = document.getElementById('icon_memory');
                const iconTwoElement = document.createElement('img');
                iconTwoElement.src = icono2;
                iconoDos.appendChild(iconTwoElement);
                break;
            case 2:
                const iconoTres = document.getElementById('icon_verbal');
                const iconThreeElement = document.createElement('img');
                iconThreeElement.src = icono3;
                iconoTres.appendChild(iconThreeElement);
                break;
            case 3:
                const iconoCuatro = document.getElementById('icon_visual');
                const iconFourElement = document.createElement('img');
                iconFourElement.src = icono4;
                iconoCuatro.appendChild(iconFourElement);
                break;
            default:
                break;
        }
        for (let i = 0; i < 3; i++) {
          if(data.length>3){
            result =(score1+score2+score3+score4)/4;
            resultProm = Math.round(result);
            console.log(resultProm);
            percent= "of 100";
            space=" ";
            scoreProm.textContent = resultProm;
            scoreProm.innerHTML += `<p class='prom'>${space}${percent}</p>`;
          }
        }
      });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
