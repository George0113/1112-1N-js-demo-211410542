const showClassDemo = (week) => {
    const showDome = document.querySelector('.banner-section');
    switch(week){
        case 'w1':
            showDome.innerHTML = `<iframe src='./demo/w01/index.html' width="100%" height="100%"/>`;
            break;
        case 'w2':
            showDome.innerHTML = `<iframe src='./demo/w02-tictactoe/tictactoe_42.html' width="100%" height="100%"/>`;
            break;
        case 'w3':
            showDome.innerHTML = `<iframe src='./demo/w03-review/index.html' width="100%" height="100%"/>`;
            break;
        case 'w4':
            showDome.innerHTML = `<iframe src='./demo/w04-menu/index.html' width="100%" height="100%"/>`;
            break;
        case 'w5-1':
            showDome.innerHTML = `<iframe src='./demo/w05-menu/index.html' width="100%" height="100%"/>`;
            break;
        case 'w5-2':
            showDome.innerHTML = `<iframe src='./demo/w5-modal/index.html' width="100%" height="100%"/>`;
            break;
        case 'w6':
            showDome.innerHTML = `<iframe src='./demo/w06-array/p3_42/p3_42.html' width="100%" height="100%"/>`;
            break;
        case 'p1':
            showDome.innerHTML = `<iframe src='./demo/midprep_stud_42/p1_bmi_42/p1_42.html' width="100%" height="100%"/>`;
            break;
        case 'p2':
            showDome.innerHTML = `<iframe src='./demo/midprep_stud_42/p2_counter_42/p2_42.html' width="100%" height="100%"/>`;
            break;
        case 'p3':
            showDome.innerHTML = `<iframe src='./demo/midprep_stud_42/p3_tour_42/p3_42.html' width="100%" height="100%"/>`;
            break;        
    }

    
}