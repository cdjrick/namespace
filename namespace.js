var CDJRICK = {
    init: function () {
        let div1 = document.createElement("div");
        div1.className = "box";
        div1.textContent = "rick0048";

        let boxes = document.getElementById("boxes");
        boxes.appendChild(div1);

        div1.addEventListener("click", onClick);
        div1.addEventListener("mouseover", mouseOver);
        div1.addEventListener("mouseout", mouseOut);

        function onClick() {

            this.style.borderColor = "green";
            this.style.backgroundColor = "red";

        }

        function mouseOver() {
            this.classList.toggle("highlight");
        }

        function mouseOut() {
            this.classList.toggle("highlight");
            this.removeAttribute("style");
        }

    }
}