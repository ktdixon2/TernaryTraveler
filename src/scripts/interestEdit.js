import dbCalls from "./dbCalls"
import interestList from "./interestList"

const interestEdit = {

    appendEditToDom(articleId, objToEdit) {

        let interestCostField = document.createElement("p");

        let interestCostLabel = document.createElement("label");
        interestCostLabel.textContent = "Edit Cost"
        let interestCostInput = document.createElement("input");
        interestCostInput.value = objToEdit.cost

        interestCostField.appendChild(interestCostLabel);
        interestCostField.appendChild(interestCostInput);

        let interestReviewField = document.createElement("p");

        let interestReviewLabel = document.createElement("label");
        interestReviewLabel.textContent = "Edit Review"
        let interestReviewInput = document.createElement("input");
        interestReviewInput.value = objToEdit.review

        interestReviewField.appendChild(interestReviewLabel);
        interestReviewField.appendChild(interestReviewInput);

        let updateButton = document.createElement("button");
        updateButton.textContent = "Update Info"

        updateButton.addEventListener("click", () => {
            let editedInterest = {
                placeId: objToEdit.placeId,
                name: objToEdit.name,
                description: objToEdit.description,
                cost: interestCostInput.value,
                review: interestReviewInput.value
            }
            dbCalls.putEditedInterest(objToEdit.id, editedInterest)
                .then(response => {
                    interestList.appendToDom()
                })
        })

        let interestItemArticle = document.querySelector(`#${articleId}`);

        while (interestItemArticle.firstChild) {
            interestItemArticle.removeChild(interestItemArticle.firstChild);
        }

        interestItemArticle.appendChild(interestCostField);
        interestItemArticle.appendChild(interestReviewField);
        interestItemArticle.appendChild(updateButton);

    }
}

export default interestEdit
