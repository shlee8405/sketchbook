// 1- create 16 pixelRows inside Container
// 2- create 16 pixels inside pixelRows


//variables of arrays & creation of container
var pixelRow = [];
var pixel = [];
var container = [] ;

container[0] = document.createElement('div');
container[0].id = 'container';


var main = document.getElementById('page');
main.appendChild(container[0]);


//function to create Y into X
function createPixel(x, y) {
    x.appendChild(y);
};

//create num copies of what into where.
function copyPixel(num, what, where, id) {

    where.forEach((where) => {
        for (let i = 1; i <= num; i++) {
        what[i] = document.createElement('div');
        what[i].id = id + i;
        what[i].className = id;
        createPixel(where, what[i]);
    }
})

}
//execution
copyPixel(16, pixelRow, container, "pixelRow");
copyPixel(16, pixel, pixelRow, "pixel");

var pixel = document.getElementsByClassName('pixel');
Object.keys(pixel).forEach(as=> {
    pixel[as].addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor="red";
    })
})

console.log(pixel);

//Add H1 before everything 
/*
pixelRow[0] = document.createElement('h1');
pixelRow[0].textContent = "Hello World";
pixelRow[1].before(pixelRow[0]);*/
