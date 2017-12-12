function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

function showtab(tabname) {
    hiddenTabs();
    document.getElementById("tab-" + tabname).className = "block2-1 active";
}

function hiddenTabs() {
    var tabs = document.getElementById('tab-content').children;
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = "hidden";
    }
}
