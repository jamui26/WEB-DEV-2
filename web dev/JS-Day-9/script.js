// Task-1:

const profile= document.getElementById("profile");
console.log(profile);

profile.style.color="black";
profile.style.backgroundColor="#f5f5f5";
profile.style.textAlign="center";
// profile.textContent="Komal";
profile.style.padding="15px";

//Task-2

const highlight=document.getElementsByClassName("important");
console.log(highlight);

for (let i=0; i<highlight.length; i++){
    highlight[i].style.color="red";
    highlight[i].style.fontSize="30px";
}
