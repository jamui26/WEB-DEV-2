const heading= document.getElementById("myHeading");
console.log(heading);

heading.style.color="blue"
heading.style.backgroundColor="black"
heading.textContent="Hello Students!"

const subHeading = document.getElementsByClassName("sub-heading");
console.log(subHeading);

for(let i=0; i<subHeading.length; i++){
    subHeading[0].style.color="orange";
      subHeading[1].style.color="brown";
        subHeading[2].style.color="blue";
      subHeading[3].style.color="green";

}


const content = document.querySelector("#content p");
console.log(content);

content.style.fontsize="100px";