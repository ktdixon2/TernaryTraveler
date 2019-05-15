const dbCalls = {

    getAllPlaces() {
        return fetch("http://localhost:8088/places")
            .then(response => response.json())
    },

    getAllInterests() {
        return fetch("http://localhost:8088/interests?_expand=place")
            .then(response => response.json())
    },

    postAllInterests(newInterestToSave) {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInterestToSave)
        })
    },

    deleteInterest(interestId) {
        return fetch(`http://localhost:8088/interests/${interestId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },

    getOneInterest(interestId) {
        return fetch(`http://localhost:8088/interests/${interestId}`)
            .then(response => response.json())
    },

    putEditedInterest(interestId, interestToEdit) {
        return fetch(`http://localhost:8088/interests/${interestId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestToEdit)
        })
    }
}

export default dbCalls