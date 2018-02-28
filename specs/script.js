window.onload = function() {
    // Parse headers into data structure
    let headers = document.body.getElementsByTagName("h2");
    let texts = [];
    for (let i=0; i<headers.length; i++) {
        let el = headers[i];
        texts.push(el.innerHTML);
    }

    // Write TOC using data structure
    let toc = document.getElementById("toc");
    let ul = document.createElement("ul");
    for (let i=0; i<texts.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = texts[i];
        ul.append(li);
    }
    toc.append(ul);
};
