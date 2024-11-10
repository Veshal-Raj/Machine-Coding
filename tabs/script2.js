let tabDetails = [
    {
        id: 'Tab1',
        tabBtn: "Tab 1",
        tabContent: "Tab 1 Content"
    },
    {
        id: 'Tab2',
        tabBtn: "Tab 2",
        tabContent: "Tab 2 Content"
    },
    {
        id: 'Tab3',
        tabBtn: "Tab 3",
        tabContent: "Tab 3 Content"
    },
    {
        id: 'Tab4',
        tabBtn: "Tab 4",
        tabContent: "Tab 4 Content"
    }
]

let buttonContainer = document.getElementById("button-container")
let contentContainer = document.getElementById("content-container")

for (const element of tabDetails) {
    let newBtn = document.createElement('button');
    newBtn.className = 'tab-button';
    newBtn.setAttribute("onclick", `showTab(event,'${element.id}')`);
    newBtn.textContent = `${element.tabBtn}`;

    let newContent = document.createElement('div');
    newContent.className = "tab-content";
    newContent.id = `${element.id}`;
    newContent.textContent = `${element.tabContent}`;

    buttonContainer.appendChild(newBtn);
    contentContainer.appendChild(newContent);
}

function showTab(event, tabName) {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(e => e.classList.remove('active'))
    tabContents.forEach(e => e.classList.remove('active'))
    event.target.classList.add('active')
    document.getElementById(tabName).classList.add('active')
}

document.querySelector('.tab-button').classList.add('active');
document.querySelector('.tab-content').classList.add('active');