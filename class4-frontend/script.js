window.onload = function() {
    // Parse headers into data structure
    let headers = document.body.getElementsByTagName("h2");
    let texts = [];
    for (let i=0; i<headers.length; i++) {
        let el = headers[i];
        let text = el.innerHTML;
        el.innerHTML = "<a name='" + i.toString() + "'>" + text;
        texts.push(text);
    }

    // Write TOC using data structure
    let toc = document.getElementById("toc");
    let ul = document.createElement("ul");
    for (let i=0; i<texts.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerHTML = texts[i];
        a.href = "#" + i;
        li.append(a);
        ul.append(li);
    }
    toc.append(ul);

    // Set title to h1 content
    let h1 = document.body.getElementsByTagName("h1");
    if (h1.length == 1) {
        document.title = h1[0].innerHTML;
    }
};
