const showClassDemo = (week) => {
    const showDome = document.querySelector('.banner-section');
    switch(week){
        case 'w1':
            showDome.innerHTML = `<iframe src='./demo/w01/index.html' width="100%" height="100%"/>`;
            break;
        case 'w1-md':
            showDome.innerHTML = `<iframe src='./demo/md/w01/w01_42.html' width="100%" height="100%"/>`;
            break;
        case 'w2':
            showDome.innerHTML = `<iframe src='./demo/w02-tictactoe/tictactoe_42.html' width="100%" height="100%"/>`;
            break;
        case 'w2-md':
            showDome.innerHTML = `<iframe src='./demo/md/w02/w02_42.html' width="100%" height="100%"/>`;
            break;
        case 'w3':
            showDome.innerHTML = `<iframe src='./demo/w03-review/index.html' width="100%" height="100%"/>`;
            break;
        case 'w3-md':
            showDome.innerHTML = `<iframe src='./demo/md/w03/w03_42.html' width="100%" height="100%"/>`;
            break;            
        case 'w4':
            showDome.innerHTML = `<iframe src='./demo/w04-menu/index.html' width="100%" height="100%"/>`;
            break;
        case 'w4-md':
            showDome.innerHTML = `<iframe src='./demo/md/w04/w04_42.html' width="100%" height="100%"/>`;
            break;
        case 'w5-1':
            showDome.innerHTML = `<iframe src='./demo/w05-menu/index.html' width="100%" height="100%"/>`;
            break;
        case 'w5-md':
            showDome.innerHTML = `<iframe src='./demo/md/w05/w05_42.html' width="100%" height="100%"/>`;
            break;
        case 'w5-2':
            showDome.innerHTML = `<iframe src='./demo/w5-modal/index.html' width="100%" height="100%"/>`;
            break;
        case 'w6':
            showDome.innerHTML = `<iframe src='./demo/w06-array/p3_42/p3_42.html' width="100%" height="100%"/>`;
            break;
        case 'w6-md':
            showDome.innerHTML = `<iframe src='./demo/md/w06/w06_42.html' width="100%" height="100%"/>`;
            break;
        case 'w9-md':
            showDome.innerHTML = `<iframe src='./demo/md/w09/w09_42.html' width="100%" height="100%"/>`;
            break;
        case 'p1':
            showDome.innerHTML = `<iframe src='./demo/midprep_stud_42/p1_bmi_42/p1_42.html' width="100%" height="100%"/>`;
            break;
        case 'p2':
            showDome.innerHTML = `<iframe src='./demo/midprep_stud_42/p2_counter_42/index.html' width="100%" height="100%"/>`;
            break;
        case 'p3':
            showDome.innerHTML = `<iframe src='./demo/midprep_stud_42/p3_tour_42/index.html' width="100%" height="100%"/>`;
            break;
        case 'w11':
            showDome.innerHTML = `<iframe src='./demo/w11/index.html' width="100%" height="100%"/>`;
            break;
        case 'w11-md':
            showDome.innerHTML = `<iframe src='./demo/md/w11/w11_42.html' width="100%" height="100%"/>`;
            break;
        case 'w12':
            showDome.innerHTML = `<iframe src='./demo/w12-async/7-async-tutorials/index.html' width="100%" height="100%"/>`;
            break;
        case 'w12-md':
            showDome.innerHTML = `<iframe src='./demo/md/w12/w12_42.html' width="100%" height="100%"/>`;
            break;
        case 'w13':
            showDome.innerHTML = `<iframe src='./demo/w13-menu-api/menu.html' width="100%" height="100%"/>`;
            break;
        case 'w13-md':
            showDome.innerHTML = `<iframe src='./demo/md/w13/w13_42.html' width="100%" height="100%"/>`;
            break;
        case 'w14':
            showDome.innerHTML = `<iframe src='./demo/w14-api-more/p4_42/index.html' width="100%" height="100%"/>`;
            break;
        case 'w14-md':
            showDome.innerHTML = `<iframe src='./demo/md/w14-products/w14_42.html' width="100%" height="100%"/>`;
            break;
        case 'w15':
            showDome.innerHTML = `<iframe src='./demo/w15-store-product/index.html' width="100%" height="100%"/>`;
            break;            
        case 'w15-md':
            showDome.innerHTML = `<iframe src='./demo/md/w15/w15_42.html' width="100%" height="100%"/>`;
            break;
        case 'w16':
            showDome.innerHTML = `<iframe src='./demo/w16-meal-finder/index.html' width="100%" height="100%"/>`;
            break;
        case 'w16-md':
            showDome.innerHTML = `<iframe src='./demo/md/w16/w16_42.html' width="100%" height="100%"/>`;
            break;
        case 'api-md':
            showDome.innerHTML = `<iframe src='./demo/md/api/api_42.html' width="100%" height="100%"/>`;
            break;
        case 'api':
            showDome.innerHTML = `<iframe src='./demo/api-project/api_42.html' width="100%" height="100%"/>`;
            break;
    }

    
}