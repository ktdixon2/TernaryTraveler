import dbCalls from "./dbCalls"
import interestsCard from "./interestsCard";

const interestList = {

    appendToDom() {

        dbCalls.getAllInterests()
            .then(parsedInterests => {
                let interestDocFrag = document.createDocumentFragment();
                parsedInterests.forEach(interest => {
                    let interestHtml = interestsCard.interestBuilder(interest);
                    interestDocFrag.appendChild(interestHtml);
                });

                let interestOutput = document.querySelector(".output");
                while (interestOutput.firstChild) {
                    interestOutput.removeChild(interestOutput.firstChild);
                }
                interestOutput.appendChild(interestDocFrag);
            })
    }
}

export default interestList