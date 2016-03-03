var item = document.getElementsByClassName('accordionItem');
var header = document.getElementsByClassName('accordionItemHeader');

for (i = 0; i < header.length; ++i) {
    header[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < item.length; i++) {
        item[i].className = 'accordionItem close';
    }
    
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}