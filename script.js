function MudaTema(tema) {
   
    if (tema==='fire') {
       document.body.classList.remove('agua');
       document.body.classList.add('fire');

    }
    else{
        document.body.classList.remove('fire');
        document.body.classList.add('agua');
    }
}