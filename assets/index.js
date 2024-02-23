const content = document.getElementById("content")
const form = document.getElementById("form")
const btnVerificationKey = document.getElementById("btn-verification")
const btnRemoveKey = document.getElementById("btn-remove-key")
const inputKey = document.getElementById("key")
const key = "secret"

const init = () => {
    const validKey = localStorage.getItem("kunci") === key

    if (validKey) {
        content.style.display = "block"
        form.style.display = "none"
    } else {
        content.style.display = "none"
        form.style.display = "block"
    }
}
init()

const removeKey = () => {
    localStorage.clear()
    init()
}

const verificationKey = () => {
    localStorage.setItem("kunci", inputKey.value)
    if (inputKey.value !== key) {
        const invalidMessageEl = document.createElement("div")
        invalidMessageEl.classList.add("alert", "alert-danger", "mt-4", "fs-5")
        invalidMessageEl.appendChild(document.createTextNode("Kunci Salah"))

        const targetParent = btnVerificationKey.parentElement
        targetParent.appendChild(invalidMessageEl)

        setTimeout(() => {
            targetParent.removeChild(invalidMessageEl)
        }, 1000)
    }
    init()
}

inputKey.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return
    verificationKey()
})

btnVerificationKey.addEventListener("click", verificationKey)
btnRemoveKey.addEventListener("click", removeKey)
