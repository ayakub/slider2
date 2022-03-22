
var slider = document.querySelectorAll('.slider');
var output = document.getElementById("demo");

for (var i = 0; i< slider.length; i++) {
  slider[i].oninput = function() {
    output.innerHTML = this.value
  }
}


