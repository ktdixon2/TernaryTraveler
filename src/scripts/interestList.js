import dbCalls from "./dbCalls"
import interestsCard from "./interestsCard";

// Module that querySelects the output for interestCards to be appended to.
const interestList = {

    appendToDom() {

        // Database call that grabs all interests to the database and builds them up to be appends
        dbCalls.getAllInterests()
            .then(parsedInterests => {
                let interestDocFrag = document.createDocumentFragment();
                parsedInterests.forEach(interest => {
                    let interestHtml = interestsCard.interestBuilder(interest);
                    interestDocFrag.appendChild(interestHtml);
                });

                let interestOutput = document.querySelector(".output");

                // While loop that prevents divCards from appending more than once, and new info will append under old posts.
                while (interestOutput.firstChild) {
                    interestOutput.removeChild(interestOutput.firstChild);
                }
                interestOutput.appendChild(interestDocFrag);
            })
    }
}

export default interestList