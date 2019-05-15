import dbCalls from "./dbCalls"
import interestEdit from "./interestEdit"
import interestList from "./interestList"

const interestsCard = {

    interestBuilder(interestObj) {
        console.log("interestObj", interestObj)

        let interestDiv = document.createElement("div");
        interestDiv.setAttribute("id", `interest--${interestObj.id}`);
        interestDiv.setAttribute("class", "interest_div")

        let interestNameLabel = document.createElement("h3");
        interestNameLabel.textContent = "Name"
        let interestName = document.createElement("p");
        interestName.textContent = interestObj.name;

        let interestDesLabel = document.createElement("h3");
        interestDesLabel.textContent = "Description"
        let interestDescription = document.createElement("p");
        interestDescription.textContent = interestObj.description;

        let interestCostLabel = document.createElement("h3");
        interestCostLabel.textContent = "Cost"
        let interestCost = document.createElement("p");
        interestCost.textContent = interestObj.cost

        let interestReviewLabel = document.createElement("h3");
        interestReviewLabel.textContent = "Review"
        let interestReview = document.createElement("p");
        interestReview.textContent = interestObj.review

        let interestCountryLabel = document.createElement("h3");
        interestCountryLabel.textContent = "Country"
        let interestCountry = document.createElement("p");
        interestCountry.textContent = interestObj.place.name

        // Create edit and delete button for each of the objest created
        let editButton = document.createElement("button");
        editButton.textContent = "Edit"

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete"
        deleteButton.addEventListener("click", () => {
            if (confirm("Are you sure you'd like to delete this interest?")) {
                let interestId = event.target.parentNode.id.split("--")[1];
                dbCalls.deleteInterest(interestId)
                    .then(response => {
                        interestList.appendToDom()
                    })
            }
        })

        let horizontalRule = document.createElement("hr");

        interestDiv.appendChild(interestNameLabel);
        interestDiv.appendChild(interestName);
        interestDiv.appendChild(interestDesLabel);
        interestDiv.appendChild(interestDescription);
        interestDiv.appendChild(interestCostLabel);
        interestDiv.appendChild(interestCost);
        interestDiv.appendChild(interestReviewLabel);
        interestDiv.appendChild(interestReview);
        interestDiv.appendChild(interestCountryLabel);
        interestDiv.appendChild(interestCountry);

        interestDiv.appendChild(editButton);
        interestDiv.appendChild(deleteButton);
        interestDiv.appendChild(horizontalRule);

        return interestDiv

    }
}

export default interestsCard
