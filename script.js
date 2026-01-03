const mainContainer = document.createElement("div");
const refreshBtn = document.createElement("button");
refreshBtn.className = "refreshBtn";
mainContainer.className = "mainContainer";
let numberOfPixels;
function addDivs(numberOfDivs) {
    const totalDivs = numberOfDivs * numberOfDivs;

    // Make sure the container is in DOM first
    const containerWidth = mainContainer.offsetWidth;
    const containerHeight = mainContainer.offsetHeight;

    for (let i = 0; i < totalDivs; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "childDiv";

        // Dynamically set size
        newDiv.style.width = `${containerWidth / numberOfDivs}px`;
        newDiv.style.height = `${containerHeight / numberOfDivs}px`;

        newDiv.addEventListener("mouseover", () => {
            const r = Math.floor(256 * Math.random());
            const g = Math.floor(256 * Math.random());
            const b = Math.floor(256 * Math.random());
            newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        mainContainer.appendChild(newDiv);
    }
}



       
refreshBtn.textContent = `Resize Grid`;

refreshBtn.addEventListener("click", () => {
    numberOfPixels = prompt(`Enter The Number of Pixels (eg 16 for 16x16)`)
    if(numberOfPixels > 100)
    {
        alert(`Please enter a number no greater than 100 eg (16 for 16x16)`);
        return;
    }
    mainContainer.innerHTML = "";
    addDivs(numberOfPixels);
    
} )
document.body.appendChild(refreshBtn);

document.body.appendChild(mainContainer);
numberOfPixels = prompt(`Enter The Number of Pixels (eg 16 for 16x16)`)
if(numberOfPixels > 100){
    prompt(`Please enter a number no greater than (100 eg 16 for 16x16)`)
}
addDivs(numberOfPixels);