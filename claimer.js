function claimBonus(){
    var buttons = document.getElementsByClassName("tw-button tw-button--success")
    for(var i = 0; i<buttons.length; i++){
        buttons[i].click();
    }
    setTimeout(claimBonus, 10000);
}

claimBonus();