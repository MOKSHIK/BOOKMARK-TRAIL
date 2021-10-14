let myLeads = []
const inpuEL = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const savedEL = document.getElementById("saved")
let deleteEL = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteEL.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputbtn.addEventListener("click", function(){
    myLeads.push(inpuEL.value)
    inpuEL.value = " "
    localStorage.setItem("myLeads",JSON.stringify(myLeads) )
    myLeads.push ()
    renderLeads()
})
function renderLeads(){
    let listItems = ""

    for(let i = 0;i < myLeads.length;i++){
     
        listItems += `
            <li>
                <a target='_blank' href="${myLeads[i]}">
                    ${myLeads[i]}
                </a>
            </li>
        `
    }

    savedEL.innerHTML = listItems

}


