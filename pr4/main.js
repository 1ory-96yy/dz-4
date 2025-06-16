window.addEventListener('load', () => {
    const form = document.getElementById("form1");
    const colorsContainer = document.getElementById("colors-container");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const R = document.getElementById("R").value;
        const G = document.getElementById("G").value;
        const B = document.getElementById("B").value;
        if (R < 0 || R > 255 || G < 0 || G > 255 || B < 0 || B > 255) {
            alert("Please enter values between 0 and 255");
            return;
        }
        const box = document.createElement("div");
        box.className = "cbox";
        const csquare = document.createElement("div");
        csquare.className = "csquare";
        csquare.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
        const clabel = document.createElement("div");
        clabel.className = "clabel";
        clabel.innerText = `RGB (${R}, ${G}, ${B})`;
        box.appendChild(csquare);
        box.appendChild(clabel);
        colorsContainer.appendChild(box);
        document.getElementById("R").value = '';
        document.getElementById("G").value = '';
        document.getElementById("B").value = '';
    });
});