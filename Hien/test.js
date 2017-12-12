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
    document.getElementById(tabname).className = tabname+" active-menu-tab";
}

function hiddenTabs() {
    var tab = document.getElementById('menutab').children;
    for (i = 0; i < tab.length; i++) {
        tab[i].children[0].className = "";
    }
    var tabs = document.getElementById('tab-content').children;
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = "hidden";
    }
}
