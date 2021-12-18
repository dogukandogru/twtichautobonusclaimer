function claimBonus(){
    var buttons = document.querySelectorAll('[aria-label="Claim Bonus"]');
    document.getelement
    for(var i = 0; i<buttons.length; i++){
        buttons[i].click();
    }
    setTimeout(claimBonus, 5000);
}

claimBonus();
