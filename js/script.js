// variabel to grab all inputs
const inputs = document.querySelectorAll('.controls input');
// 

function handleUpdate () {
    // variable to store the sizing of the element 'px' or nothing = ''
    const suffix = this.dataset.sizing || '';
    // 1. document.documentElement - this collects the root variables from the css and sets the style property defined in the css to
    // 2. the name of the input being changed, the value and the suffix which is defined by the data-sizing property in the html
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// function to log out changes created with inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));
//  function to log changes when the move on inputs take place
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

