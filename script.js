// Global variables for slider object and values.
var slider = document.getElementById("mySlider");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value + " %"; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    
	// Update label.
	output.innerHTML = this.value + " %";
  
    // Reset results fields before display.
	clearFields();
	
	// hides results strings.
	document.getElementById("display").style.display = "none";
}

// Function to compute and display amounts.
function compute(){
	
	// Reset results fields before display.
	clearFields();
	
	// Get principal amount.
	var fPrincipal = document.getElementById("principal").value;
	if (fPrincipal <= 0 ||
	fPrincipal === ""){
		alert("Invalid Principal amount. Must be > 0.");
		document.getElementById("principal").value = "";
		document.getElementById("principal").focus();
		document.getElementById("display").style.display = "none";
		return;
	}
	
	// Get annual rate.
	var fAnnualRate = slider.value /100;
	
	// Get number of years.
	var fYears = document.getElementById("years").value;
	if (fYears <= 0 ||
	fYears === ""){
		alert("Invalid year value. Must be > 0.");
		document.getElementById("years").value = "";
		document.getElementById("years").focus();
		document.getElementById("display").style.display = "none";
		return;
	}
	
	// Calculate total amount.
	var ffinalAmount = fPrincipal * (1 + fAnnualRate * fYears);
	
	// Get interest part of amount.
	var fInterest = ffinalAmount - fPrincipal;
	
	// Write results in display section.
	var strLine = document.getElementById("deposit").textContent;
	document.getElementById("deposit").textContent = strLine + " " + fPrincipal + ",";
	
	strLine = document.getElementById("atInterest").textContent;
	 
	var rate =  fAnnualRate * 100;
	document.getElementById("atInterest").textContent = strLine + " " + rate.toFixed(1) + "%.";
	
	strLine = document.getElementById("willReceive").textContent;
	document.getElementById("willReceive").textContent = strLine + " " + fInterest.toFixed(0) + ",";
	
	// Get date object and add number of years.
	const d = new Date();
	var nYear = Number(d.getFullYear()) + Number(fYears);
   
	strLine = document.getElementById("inTheYear").textContent;
	document.getElementById("inTheYear").textContent = strLine + " " + nYear;
	
	// Make results section visible only after computing valid results.
	document.getElementById("display").style.display = "block";
}

// Function to reset result text to default values.
function clearFields(){
	
	document.getElementById("deposit").textContent = "If you deposit";
	document.getElementById("atInterest").textContent = "At an interest rate of";
	document.getElementById("willReceive").textContent = "You will receive an amount of";
	document.getElementById("inTheYear").textContent = "In the year";
}
