//get all the inputs

const inputs = document.querySelectorAll('input');

function handleChange() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleChange))
inputs.forEach(input => input.addEventListener('mouseover', handleChange))


//TODO: Implement the download button
// function downloadImage() {
//     html2canvas(document.querySelector("#image")).then(canvas => {
//         console.log(canvas.toDataURL("image/jpeg", 0.9))
//     });
// }
// document.getElementById('download').addEventListener('click', console.log('hi'));