const numbers = document.querySelector(".numbers");
const check = document.querySelector(".check");

// When clicking on the check button, we will brute-force every number and output ALL possible variants with three terms in it.
check.addEventListener("click", () => {
	const result = document.querySelector(".result");
	const arr = numbers.value.split("\n").map((num) => num.replaceAll(" ", "").replaceAll(",", "."));
	console.log(arr);
	const results = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			for (let k = 0; k < arr.length; k++) {
				results.push(`<li>${arr[i]} + ${arr[j]} + ${arr[k]} = ${Number(arr[i]) + Number(arr[j]) + Number(arr[k])}</li>`);
			}
		}
	}

	result.innerHTML = results.join("\n");
})
