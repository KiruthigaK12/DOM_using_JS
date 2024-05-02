function submit() {
    const num1 = document.getElementById("input1").value;
    const num2 = document.getElementById("input2").value;
    console.log(num1);
    console.log(num2);
    const output = document.getElementById("output");

    const result = parseFloat(num1) - parseFloat(num2);
    output.value = result;
    
}
 