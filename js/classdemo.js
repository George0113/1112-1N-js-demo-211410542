const showClassDemo = (week) => {
    const showDome = document.querySelector('.demo-section');
    switch(week){
        case 'w1':
            showDome.innerHTML = `<iframe src='./demo/w01/index.html' width="100% height"100vh"/>`;
            break;
        case 'w2':
            showDome.innerHTML = `<iframe src='./demo/w02/index.html' width="100% height"100vh"/>`;
            break;
    }

    
}