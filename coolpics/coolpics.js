myButton = document.querySelector('#mybutton');
myButton.addEventListener('click',manageContent);

window.addEventListener('resize', handleResize);


const popUp = document.createElement('dialog');
popUp.innerHTML = "<img><button class='close-viewer'>X</button>";
document.body.appendChild(popUp)

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click',(event) => {
    clicked_img = event.target.closest('img');
    popUpImage = popUp.querySelector('img')
    popUpImage.src = clicked_img.src.split('-')[0] + '-full.jpeg';
    popUp.showModal();
} );

popUp.querySelector('.close-viewer').addEventListener('click', (event) =>
{
    popUp.close();
})




popUp.addEventListener('click', (event) => {
  if (event.target === popUp) {
    popUp.close();
  }
})

function manageContent () {
    const menu = document.querySelector('#menu');

    if (menu.hasAttribute('class')) {
        menu.removeAttribute('class');
    }
    else {
        menu.setAttribute('class','hide');
    }
}

function handleResize () {
    const menu = document.querySelector('#menu');
    if (innerWidth > 1000) {
        menu.removeAttribute('class');
    }
    else {
        menu.setAttribute('class','hide');
    }
    }





