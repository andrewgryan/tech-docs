window.onload = function() {
    let el = document.getElementById("ffc-catchments");
    let img = document.createElement("img");
    img.src =  "shape-000.png";
    el.append(img)

    let index = 0;
    let imageCount = 898;

    // Previous button
    let previous = document.createElement("button");
    previous.innerHTML = "previous catchment";
    previous.onclick = function() {
        index -= 1;
        if (index < 0) {
            index += imageCount;
        }
        img.src = "shape-" + String("000" + index).slice(-3) + ".png";
    };
    el.append(previous);

    // Next button
    let next = document.createElement("button");
    next.innerHTML = "next catchment";
    next.onclick = function() {
        index += 1;
        if (index > imageCount - 1) {
            index -= imageCount;
        }
        img.src = "shape-" + String("000" + index).slice(-3) + ".png";
    };
    el.append(next);
};
