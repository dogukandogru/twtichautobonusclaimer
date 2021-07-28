function claimBonus(){
    var buttons = document.getElementsByClassName("sc-fzozJi sc-fznKkj jwRWhW")
    for(var i = 0; i<buttons.length; i++){
        buttons[i].click();
    }
    setTimeout(claimBonus, 5000);
}

claimBonus();