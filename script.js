const mainContainer = document.createElement("div");
mainContainer.className = "mainContainer";
function addDivs(numberOfDivs)
{
    const totalDivs = numberOfDivs * numberOfDivs;
    const containerWidth = mainContainer.clientWidth;
    const containerHeight = mainContainer.clientHeight;

    for(let i = 0; i < totalDivs; i++)
    {
        let newDiv = document.createElement("div");
        newDiv.className = "childDiv";

        // Dynamically set size
        newDiv.style.width = `${containerWidth / numberOfDivs}px`;
        newDiv.style.height = `${containerHeight / numberOfDivs}px`;

        newDiv.addEventListener("mouseover", () => 
            {
                newDiv.style.backgroundColor = "white";
            })

        mainContainer.appendChild(newDiv);
    }
}



document.body.appendChild(mainContainer);
let numberOfPixels = prompt(`Enter The Number of Pixels`)
addDivs(numberOfPixels);