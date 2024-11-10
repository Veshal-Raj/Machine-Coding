function showTab(event, tabName) {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(e => e.classList.remove('active'))
    tabContents.forEach(e => e.classList.remove('active'))
    event.target.classList.add('active')
    document.getElementById(tabName).classList.add('active')
}