function claimBonus(){
    var buttons = document.getElementsByClassName("ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 jGqsfG hERNRa")
    for(var i = 0; i<buttons.length; i++){
        buttons[i].click();
    }
    setTimeout(claimBonus, 5000);
}

claimBonus();
