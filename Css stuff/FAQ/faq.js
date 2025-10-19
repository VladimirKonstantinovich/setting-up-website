const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach((item, index) =>{
    let header = item.querySelector('.content-header');

    header.addEventListener('click', function(){
        header.classList.toggle('open');

        let description = item.querySelector('.accordion-description');
        console.log(description)
        if(header.classList.contains('open')){
            description.style.height = `${description.scrollHeight + 30}px`;
            description.style.paddingTop = '10px';
        }else{
            description.style.height = '0px';
            description.style.paddingTop = '0px';
        }

    })
})

