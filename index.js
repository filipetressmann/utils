function trava() {
    while (true) {
        var paragraph = document. getElementsByTagName('p')[0];
        var text = document.createTextNode("aaaaa");
        paragraph.appendChild(text);
    }
}

for (let i = 0; i < 100000; i++)
    trava()
