/* To disable buttons and initialize the progress bar */

let progress = 0;
let ApplicantName = true,
email = true,
server = true,
image = true;
college = true,
T_n_C = true,
document.getElementById("submit-button").disabled = true;


/* */

function onInput(typep) {
	if(document.getElementById(typep).value !== "") {
		if(typep == "username-input" && ApplicantName) {
			progress++;
			ApplicantName = false;
		}
		if(typep == "email-handler-input" && email){
			progress++;
			email = false;
		}
		if(typep == "server-input" && server) {
			progress++;
			server = false;
		}
		if(typep == "image-input" && image) {
			progress++;
			image = false;
		}
		if(typep == "college-input" && college) {
			progress++;
			college = false;
		}
		if(typep = "conditions-input" ){
			if(T_n_C) progress++;
			if(!T_n_C) progress--;
			T_n_C = false;
		}
		document.getElementById("progress-bar-new").style =
		"width: " + (progress * 100) / 6 + "%";
		
		if(progress == 6)
			document.getElementById("submit-button").disabled = false;
		else	
			document.getElementById("submit-button").disabled = true;
		
	}
	
	else if(document.getElementById(typep).value == "") {
		if(typep == "username-input" && !ApplicantName) {
			progress--;
			ApplicantName = false;
		}
		if(typep == "email-handler-input" && !email){
			progress--;
			email = false;
		}
		if(typep == "server-input" && !server) {
			progress--;
			server = false;
		}
		if(typep == "image-input" && !image) {
			progress--;
			image = false;
		}
		if(typep == "college-input" && !college) {
			progress--;
			college = false;
		}
		if(typep = "conditions-input" && !T_n_C ){
			progress--;
			T_n_C = false;
		}
		
		document.getElementById("progress-bar-new").style =
		"width: " + (progress * 100)/6 + "%";
		
		
		if(progress == 6)
			document.getElementById("submit-button").disabled = false;
		else	
			document.getElementById("submit-button").disabled = true;
	}
}
