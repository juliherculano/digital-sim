novoMedico.onclick =  () => {
    overlay.classList.add('active');
    drawer.classList.add('active');
}

botaoFechar.onclick =  () => {
    drawer.classList.remove('active');
    setTimeout(() => {
        overlay.classList.remove('active');
    }, 700);
}

overlay.onclick =  () => {
    drawer.classList.remove('active');
    setTimeout(() => {
        overlay.classList.remove('active');
    }, 700);
}

