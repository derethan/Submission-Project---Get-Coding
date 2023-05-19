function changecontent(btn) {

    if (btn==1) {
      document.getElementById("container").style.display = "block";      
      document.getElementById("container2").style.display = "none";      
      document.getElementById("container3").style.display = "none";

      document.getElementById("b1").className="active";
      document.getElementById("b2").className="none";
      document.getElementById("b3").className="none";

    } else if (btn==2) {
      document.getElementById("container").style.display = "none";      
      document.getElementById("container2").style.display = "block";      
      document.getElementById("container3").style.display = "none";

      document.getElementById("b1").className="none";
      document.getElementById("b2").className="active";
      document.getElementById("b3").className="none";

    } else {
      document.getElementById("container").style.display = "none";      
      document.getElementById("container2").style.display = "none";      
      document.getElementById("container3").style.display = "block";

      document.getElementById("b1").className="none";
      document.getElementById("b2").className="none";
      document.getElementById("b3").className="active";

    }
    }