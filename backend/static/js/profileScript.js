function showBlock(n){
    let tabs = document.querySelectorAll('.tabSections');
    let block = document.getElementById(n);

    tabs.forEach(i => i.style.display = "none");

    block.style.display = "flex";
};

function showMenu(){
    document.getElementById("modalMenu").classList.toggle("displayFlex");
};

