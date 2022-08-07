    function buttonChange(x){
        x.style.background ='#ffff';
        x.style.color='#007bc1';
        x.style.border = '6px solid #007bc1'
        x.style.outline = 'none';
    }

    function buttonDefault(x){
        x.style.background = '#007bc1';
        x.style.color = '#ffff';
        x.style.outline = '2px solid #ffff';
    }
    const panel = document.querySelector('.notification');
    const content = document.querySelector('.content');

    document.querySelector('.btn1').addEventListener('click', function(){
        panel.classList.toggle('slide');   
        content.classList.toggle('slide');
    })

    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.closeBtn');

    let isClicked = false;

    window.addEventListener('scroll',  function(){
        if (!isClicked && window.pageYOffset >= 0.3 * window.innerHeight) {
            document.querySelector('.modal').style.display = "block";
        }
    })

    function closeModal(){
        document.querySelector('.modal').style.display = "none";
        isClicked = true;
        setTimeout(() =>{
            isClicked = false;
            }, 10 * 60 * 1000)
    }

    closeBtn.addEventListener('click', () => {
        modal.setAttribute('closing', "");
        modal.addEventListener('animationend', () => {
            modal.removeAttribute('closing');
            closeModal();
        }, {once: true})
    });

    
    
    
