const heading = document.getElementById("title");
    const paras = document.getElementsByClassName("text");
    const headings = document.getElementsByTagName("h2");

    document.getElementById("btn").addEventListener("click", function() {

      heading.textContent = "Changed using getElementById";

      for (let i = 0; i < paras.length; i++) {
        paras[i].style.color = "red";
      }

      for (let i = 0; i < headings.length; i++) {
        headings[i].style.backgroundColor = "yellow";
      }

      const inside = document.getElementById("box")
                             .getElementsByClassName("inside")[0];
      inside.textContent = "Changed inside div";
    });