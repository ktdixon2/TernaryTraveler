import dbCalls from "./dbCalls"
import interestList from "./interestList"

const ternaryForm = {

    createAndAppendForm() {

        let interestHeader = document.createElement("h3");
        interestHeader.textContent = "Add A New Interest!";

        let interestNameField = document.createElement("fieldset");

        let interestNameLabel = document.createElement("label");
        interestNameLabel.textContent = "Name: ";
        interestNameLabel.setAttribute("for", "interest_name");
        let interestNameInput = document.createElement("input");
        interestNameInput.setAttribute("id", "interest_name");
        interestNameInput.setAttribute("name", "interest_name");

        interestNameField.appendChild(interestNameLabel);
        interestNameField.appendChild(interestNameInput);

        let interestDescField = document.createElement("fieldset");

        let interestDescLabel = document.createElement("label");
        interestDescLabel.textContent = "Description: ";
        interestDescLabel.setAttribute("for", "interest_description");
        let interestDescInput = document.createElement("input");
        interestDescInput.setAttribute("id", "interest_description");
        interestDescInput.setAttribute("name", "interest_description");

        interestDescField.appendChild(interestDescLabel);
        interestDescField.appendChild(interestDescInput);

        let interestCostField = document.createElement("fieldset");

        let interestCostLabel = document.createElement("label");
        interestCostLabel.textContent = "Cost: ";
        interestCostLabel.setAttribute("for", "interest_cost");
        let interestCostInput = document.createElement("input");
        interestCostInput.setAttribute("id", "interest_cost");
        interestCostInput.setAttribute("name", "interest_cost");

        interestCostField.appendChild(interestCostLabel);
        interestCostField.appendChild(interestCostInput);

        let interestReviewField = document.createElement("fieldset");

        let interestReviewLabel = document.createElement("label");
        interestReviewLabel.textContent = "Leave a Review ";
        interestReviewLabel.setAttribute("for", "interest_review");
        let interestReviewInput = document.createElement("input");
        interestReviewInput.setAttribute("id", "interest_review");
        interestReviewInput.setAttribute("name", "interest_review");

        interestReviewField.appendChild(interestReviewLabel);
        interestReviewField.appendChild(interestReviewInput);

        let interestCountryField = document.createElement("fieldset");

        let interestCountryLabel = document.createElement("label");

        let interestCountry = document.createElement("select");
        interestCountry.setAttribute("id", "interest_country");

        dbCalls.getAllPlaces()
            .then(parsedPlaces => {
                parsedPlaces.forEach(place => {
                    let interestCountryName = document.createElement("option");
                    interestCountryName.textContent += `${place.name}`
                    interestCountryName.setAttribute("value", `${place.id}`);
                    interestCountryName.setAttribute("class", "interest_co");

                    interestCountry.appendChild(interestCountryName);
                    interestCountryLabel.appendChild(interestCountry);
                })
            })
        interestCountryField.appendChild(interestCountryLabel);

        let saveButton = document.createElement("button");
        saveButton.textContent = "Add New Interest";
        saveButton.setAttribute("class", "save_interest");

        saveButton.addEventListener("click", this.handleNewInterest)

        let interestFormFrag = document.createDocumentFragment();
        interestFormFrag.appendChild(interestHeader);
        interestFormFrag.appendChild(interestNameField);
        interestFormFrag.appendChild(interestDescField);
        interestFormFrag.appendChild(interestCostField);
        interestFormFrag.appendChild(interestCountryField)
        interestFormFrag.appendChild(interestReviewField);
        interestFormFrag.appendChild(saveButton);

        let formArticle = document.querySelector(".form");
        formArticle.appendChild(interestFormFrag);

    },

    handleNewInterest() {
        let inputInterestName = document.querySelector("#interest_name").value;
        let inputInterestDescription = document.querySelector("#interest_description").value;
        let inputInterestCost = document.querySelector("#interest_cost").value;
        let inputInterestReview = document.querySelector("#interest_review").value;
        let inputInterestCity = document.querySelector("#interest_country").value;

        let newInterestObj = {
            placeId: inputInterestCity,
            name: inputInterestName,
            description: inputInterestDescription,
            cost: inputInterestCost,
            review: inputInterestReview
        }

        dbCalls.postAllInterests(newInterestObj)
            .then(response => {
                interestList.appendToDom()
            })
    }
}

export default ternaryForm

