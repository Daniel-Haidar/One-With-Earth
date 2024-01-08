function showAbout(){
	document.getElementById("about").style.height = "100%";
}
function hideAbout(){
	document.getElementById("about").style.height = "0";
}

function toggleDarkmode(id){
	if(document.getElementById(id))
		document.getElementById(id).classList.toggle("darkmode");
}

function darkmode(){
	toggleDarkmode("bod");
	toggleDarkmode("bar");
	toggleDarkmode("menu");
	toggleDarkmode("small-bar");
	toggleDarkmode("cdiv");
	toggleDarkmode("login");
	toggleDarkmode("thanks");
	toggleDarkmode('maintext');
}
function showimg(element, img){
	if (window.innerWidth > 850){
		elem = document.getElementById('img');
		elem.style.display = "block";
		elem.style.backgroundImage = "url('" + img + "')";
		elem.style.border = "2px outset #0000FF";
	}
	else
		element.parentNode.closest('li').style.background = "url('" + img + "')";
}
function hideimg(element) {
	if (window.innerWidth > 850) {
		elem = document.getElementById('img');
		elem.style.background = "";
		elem.style.border = "0";
		elem.style.display = "none";
	}
	else
		element.parentNode.closest('li').style.background = "";
}
function tooltip(element){
	txt = element.innerHTML.toLowerCase();
	if (txt.includes("map"))
		showimg(element, "assets/Rock/map.png");
	else if(txt.includes("compass"))
		showimg(element, "assets/Rock/compass.jpg");
	else if(txt.includes("sunglasses"))
		showimg(element, "assets/Rock/sunglasses.jpg");
	else if(txt.includes("sunscreen"))
		showimg(element, "assets/Rock/sunscreen.jpg");
	else if(txt.includes("first-aid"))
		showimg(element, "assets/Rock/firstaid.jpg");
	else if(txt.includes("matches"))
		showimg(element, "assets/Rock/w-matches.jpg");
	else if(txt.includes("lighter"))
		showimg(element, "assets/Rock/w-lighter.jpg");
	else if(txt.includes("candle"))
		showimg(element, "assets/Rock/w-candle.jpg");
	else if(txt.includes("water"))
		showimg(element, "assets/Rock/e-water.jpg");
	else if(txt.includes("food"))
		showimg(element, "assets/Rock/e-food.jpg");
	else if(txt.includes("clothing"))
		showimg(element, "assets/Rock/e-clothing.jpg");
	else if(txt.includes("repair"))
		showimg(element, "assets/Rock/repairkit.jpg");
	else if(txt.includes("headlamp"))
		showimg(element, "assets/Rock/headlamp.jpg");
	else if(txt.includes("flashlight"))
		showimg(element, "assets/Rock/flashlight.jpg");
	else if(txt.includes("tube"))
		showimg(element, "assets/Rock/tube.jpg");
	else if(txt.includes("bag"))
		showimg(element, "assets/Rock/bag.jpg");
}
function addToolTips(){
	mainElement = document.getElementsByTagName('main')[0];
	uls = mainElement.getElementsByTagName('ul');
	for(var i=0; i<uls.length; i++){
		lis = uls[i].getElementsByTagName('li');
		for(var j=0; j<lis.length; j++){
			lis[j].style.cursor = "pointer";
			lis[j].setAttribute("onmouseover", "tooltip(this)");
			lis[j].setAttribute("onmouseleave", "hideimg(this)");
		}
	}
}
function showLogin() {
	document.getElementById('username-error').innerHTML = "";
	document.getElementById('wrapper').style.filter = "blur(5px)";
	document.getElementById('login').style.display = "block";
}
function hideLogin() {
	document.getElementById('wrapper').style.filter = "";
	document.getElementById('login').style.display = "none";
	document.getElementById('login-form').reset();
	scrollUp();
}
function login() {
	elem = document.getElementById('username');
	if(/^\w{4,12}$/i.test(elem.value)){
		if (document.getElementById('maintext').innerHTML == "Welcome to One With Earth"){
			username = elem.value;
			document.getElementById('maintext').innerHTML = "Welcome " + username + " to One With Earth!";
			document.getElementById('maintext').style.opacity = "1";
			document.getElementsByClassName('login-btn')[0].innerHTML = "<a href='javascript:logout()'><span style='cursor:pointer'>Logout</span></a>";
			document.getElementsByClassName('login-btn')[1].innerHTML = "<a href='javascript:logout()'><span style='cursor:pointer'>Logout</span></a>";
		}
		else{
			document.getElementById('in-login').style.display = "none";
			document.getElementById('maintext').style.opacity = "";
			return;
		}
		hideLogin();
	}
	else
		document.getElementById('username-error').innerHTML = "Enter a real Username";
}
function logout(){
	document.getElementById('maintext').innerHTML = "Welcome to One With Earth";
	document.getElementsByClassName('login-btn')[0].innerHTML = "<a href='javascript:showLogin()'><span style='cursor:pointer'>Login</span></a>";
	document.getElementsByClassName('login-btn')[1].innerHTML = "<a href='javascript:showLogin()'><span style='cursor:pointer'>Login</span></a>";
	document.getElementById('maintext').style.opacity = "";
}
function showThanks(){
	if(document.getElementById('phonenumber').value)
		document.getElementById('changable').innerHTML = "We'll Call You As Soon As Possible";
	document.getElementById('wrapper').style.filter = "blur(5px)";
	name = document.getElementById('fname').value;
	document.getElementById('name').innerHTML = name;
	document.getElementById('thanks').style.display ="block";
	return false;
}
function hideThanks(){
	document.getElementById('name').innerHTML = "";
	document.getElementById('thanks').style.display ="none";
	document.getElementById('wrapper').style.filter ="";
	document.getElementById('book').reset();
	document.getElementById('changable').innerHTML = "We'll Contact You By Email As Soon As Possible";
	contactUs();
	scrollUp();
}
function scrollUp(){
	document.documentElement.scrollTop = 0;
}
function scrollDown(){
	document.documentElement.scrollTop = document.documentElement.scrollHeight;
}
function bookTrip(){
	elem = document.getElementsByTagName('fieldset')[0];
	document.getElementById('optional').innerHTML = "";
	document.getElementById('phonenumber').setAttribute("required", "required");
	document.getElementById('booktrip').setAttribute("checked", "checked");
	document.getElementById('contactus').removeAttribute("checked");
	if(!document.getElementById('selectTrips')){
		if(document.getElementById('btns'))
			removeButtons();
		addSelect();
	}
}
function contactUs(){
	document.getElementById('optional').innerHTML = "(optional)";
	document.getElementById('phonenumber').removeAttribute("required");
	document.getElementById('contactus').setAttribute("checked", "checked");
	if(document.getElementById('selectTrips'))
		document.getElementById('selectTrips').remove();
	if(document.getElementById('tripp'))
		document.getElementById('tripp').remove();
	if(document.getElementById('dayy'))
		document.getElementById('dayy').remove();
	if(document.getElementById('selectTime'))
		document.getElementById('selectTime').remove();
	if(document.getElementById('selectDays'))
		document.getElementById('selectDays').remove();
	if(document.getElementById('next'))
		document.getElementById('next').remove();
	brs = document.getElementsByClassName('br');
	for(var i=0; i<brs.length; i++){
		brs[i].remove();
	}
	if(!document.getElementById('btns'))
		addButtons();
}
function addButtons() {
	elem = document.getElementsByTagName('fieldset')[0];
	btndiv = createDiv("btns");
	btndiv.appendChild(createInputButton("submit", "Send", "button"));
	resetbutton = createInputButton("reset", "Clear", "button");
	resetbutton.setAttribute("onclick", "contactUs()");
	btndiv.appendChild(resetbutton);
	elem.appendChild(btndiv);
}
function addSelect() {
	if(!document.getElementById('selectTrips') && !document.getElementById('selectDays')){
		title = document.title.toLowerCase();
		daydiv = createDiv("selectDays");
		daydiv.appendChild(createLabel("Choose Day: ", "day"));
		selectday = createSelect("days", "days", true);
		selectday.appendChild(createOption("-- Choose Day --", ""));
		selectday.appendChild(createOption("Monday", "mon"));
		selectday.appendChild(createOption("Tuesday", "tues"));
		selectday.appendChild(createOption("Wednesday", "wednes"));
		selectday.appendChild(createOption("Thursday", "thurs"));
		selectday.appendChild(createOption("Friday", "fri"));
		selectday.appendChild(createOption("Saturday", "satur"));
		selectday.appendChild(createOption("Sunday", "sun"));
		daydiv.appendChild(selectday);
		daydiv.appendChild(createBr());
		divnext = createDiv("next");
		divnext.classList.toggle("divbtn");
		if(title == "one with earth"){
			elem = document.getElementsByTagName('fieldset')[0];
			tripdiv = createDiv("selectTrips");
			tripdiv.appendChild(createLabel("Choose Activity: ", "trips"));
			selecttrip = createSelect("trips", "trips", true);
			selecttrip.appendChild(createOption("-- Choose Activity --", ""));
			selecttrip.appendChild(createOption("Hiking", "hiking"));
			selecttrip.appendChild(createOption("Mountain Climbing", "climbing"));
			selecttrip.appendChild(createOption("Camping", "camping"));
			selecttrip.appendChild(createOption("Skiing", "skiing"));
			selecttrip.appendChild(createOption("Diving", "diving"));
			tripdiv.appendChild(selecttrip);
			elem.appendChild(tripdiv);
			elem.appendChild(daydiv);
			elem.appendChild(createBr());
			divnext.setAttribute("onclick", "addTime(true)");
			divnext.innerHTML = "Next";
			elem.appendChild(divnext);
		}
		else{
			elem.appendChild(daydiv);
			elem.appendChild(createBr());
			divnext.setAttribute("onclick", "addTime(false)");
			divnext.innerHTML = "Next";
			elem.appendChild(divnext);
		}
	}
}
function removeButtons() {
	document.getElementById('btns').remove();
}
function removeSelect() {
	document.getElementById('selectTrips').remove();
	document.getElementById('selectDays').remove();
	document.getElementById('next').remove();
	brs = document.getElementsByClassName('br');
	for(var i=0; i<brs.length; i++){
		brs[i].remove();
	}
}
function getTimes() {
	times = {};
	tables = document.getElementsByTagName('table');
	for(var i = 1; i<tables.length;i++){
		trs = tables[i].getElementsByTagName('tr');
		for(var j = 0; j<trs.length;j++){
			tds = trs[j].getElementsByTagName('td');
			if(tds[0]){
				if(!times[tds[0].innerHTML])
					times[tds[0].innerHTML] = [tds[1].innerHTML];
				else
					times[tds[0].innerHTML].push(tds[1].innerHTML);
			}
		}
	}
	return times;
}
function addTime(bool){
	elem = document.getElementsByTagName('fieldset')[0];
	dayElement = document.getElementById('days');
	day = dayElement.value;
	tripdiv = createDiv("tripp");
	daydiv = createDiv("dayy");
	tripdiv.appendChild(createLabel("Activity: ", "tripVal"));
	if(bool){
		tripElement = document.getElementById('trips');
		trip = tripElement.value.toUpperCase();
		if(!trip || !day){
			alert('Please Fill The Form Before Clicking Next!');
			return;
		}
		removeSelect();
		tripdiv.appendChild(createInput("tripVal", "tripVal", "text", trip, true, true));
		daydiv.appendChild(createLabel("On: ", "dayVal"));
		daydiv.appendChild(createInput("dayVal", "dayVal", "text", day.toUpperCase()+"DAY", true, true));
		elem.appendChild(tripdiv);
		elem.appendChild(daydiv);
		elem.appendChild(createBr());
		timediv = createDiv("selectTime");
		timediv.appendChild(createLabel("Choose Time: ", "times"));
		selectElement = createSelect("times", "times", true);
		selectElement.appendChild(createOption("-- Choose Time --", ""));
		times = getTimes();
		tripname = times[trip];
		if(day == "satur" || day == "sun"){
			selectElement.appendChild(createOption(tripname[1], tripname[1]));
		}
		else{
			selectElement.appendChild(createOption(tripname[0], tripname[0]));
		}
		timediv.appendChild(selectElement);
		elem.appendChild(timediv);
		elem.appendChild(createBr());
	}
	else{
		if(!day){
			alert('Please Fill The Form Before Clicking Next!');
			return;
		}
		dayElement.parentElement.remove();
		document.getElementById('next').remove();
		tripdiv.appendChild(createInput("tripVal", "tripVal", "text", document.title.toUpperCase().replace('OWE: ', ''), true, true));
		daydiv.appendChild(createLabel("On: ", "dayVal"));
		daydiv.appendChild(createInput("dayVal", "dayVal", "text", day.toUpperCase()+"DAY", true, true));
		elem.appendChild(tripdiv);
		elem.appendChild(daydiv);
		elem.appendChild(createBr());
	}
	addButtons();
}
function createLabel(text, forVal){
	label = document.createElement("label");
	label.setAttribute("For", forVal);
	label.innerHTML = text;
	return label;
}
function createInput(id, name, type, value, disabled, required){
	input = document.createElement("input");
	input.id = id;
	input.name = name;
	input.type = type;
	input.disabled = disabled;
	input.required = required;
	input.value = value;
	return input;
}
function createBr(){
	br = document.createElement("br");
	br.classList.toggle("br");
	return br;
}
function createDiv(id){
	div = document.createElement("div");
	div.id = id;
	return div;
}
function createSelect(id, name, required){
	select = document.createElement("select");
	select.id = id;
	select.name = name;
	select.required = required;
	return select;
}
function createOption(text, value){
	option = document.createElement("option");
	option.innerHTML = text;
	option.value = value;
	return option;
}
function createInputButton(type, value, clas){
	button = document.createElement("input");
	button.type = type;
	button.value = value;
	button.classList.toggle(clas);
	return button;
}
function addCountries(){
	countresDiv = document.getElementById('countries');
	label = createLabel("Country", "country");
	select = createSelect("country", "country", true);
	select.appendChild(createOption("-- Select Country --", ""));
	select.appendChild(createOption("Afghanistan", "AF"));
	select.appendChild(createOption("Aland Islands", "AX"));
	select.appendChild(createOption("Albania", "AL"));
	select.appendChild(createOption("Algeria", "DZ"));
	select.appendChild(createOption("American Samoa", "AS"));
	select.appendChild(createOption("Andorra", "AD"));
	select.appendChild(createOption("Angola", "AO"));
	select.appendChild(createOption("Anguilla", "AI"));
	select.appendChild(createOption("Antarctica", "AQ"));
	select.appendChild(createOption("Antigua and Barbuda", "AG"));
	select.appendChild(createOption("Argentina", "AR"));
	select.appendChild(createOption("Armenia", "AM"));
	select.appendChild(createOption("Aruba", "AW"));
	select.appendChild(createOption("Australia", "AU"));
	select.appendChild(createOption("Austria", "AT"));
	select.appendChild(createOption("Azerbaijan", "AZ"));
	select.appendChild(createOption("Bahamas", "BS"));
	select.appendChild(createOption("Bahrain", "BH"));
	select.appendChild(createOption("Bangladesh", "BD"));
	select.appendChild(createOption("Barbados", "BB"));
	select.appendChild(createOption("Belarus", "BY"));
	select.appendChild(createOption("Belgium", "BE"));
	select.appendChild(createOption("Belize", "BZ"));
	select.appendChild(createOption("Benin", "BJ"));
	select.appendChild(createOption("Bermuda", "BM"));
	select.appendChild(createOption("Bhutan", "BT"));
	select.appendChild(createOption("Bolivia", "BO"));
	select.appendChild(createOption("Bonaire, Sint Eustatius and Saba", "BQ"));
	select.appendChild(createOption("Bosnia and Herzegovina", "BA"));
	select.appendChild(createOption("Botswana", "BW"));
	select.appendChild(createOption("Bouvet Island", "BV"));
	select.appendChild(createOption("Brazil", "BR"));
	select.appendChild(createOption("British Indian Ocean Territory", "IO"));
	select.appendChild(createOption("Brunei Darussalam", "BN"));
	select.appendChild(createOption("Bulgaria", "BG"));
	select.appendChild(createOption("Burkina Faso", "BF"));
	select.appendChild(createOption("Burundi", "BI"));
	select.appendChild(createOption("Cambodia", "KH"));
	select.appendChild(createOption("Cameroon", "CM"));
	select.appendChild(createOption("Canada", "CA"));
	select.appendChild(createOption("Cape Verde", "CV"));
	select.appendChild(createOption("Cayman Islands", "KY"));
	select.appendChild(createOption("Central African Republic", "CF"));
	select.appendChild(createOption("Chad", "TD"));
	select.appendChild(createOption("Chile", "CL"));
	select.appendChild(createOption("China", "CN"));
	select.appendChild(createOption("Christmas Island", "CX"));
	select.appendChild(createOption("Cocos (Keeling) Islands", "CC"));
	select.appendChild(createOption("Colombia", "CO"));
	select.appendChild(createOption("Comoros", "KM"));
	select.appendChild(createOption("Congo", "CG"));
	select.appendChild(createOption("Congo, Democratic Republic of the Congo", "CD"));
	select.appendChild(createOption("Cook Islands", "CK"));
	select.appendChild(createOption("Costa Rica", "CR"));
	select.appendChild(createOption("Cote D'Ivoire", "CI"));
	select.appendChild(createOption("Croatia", "HR"));
	select.appendChild(createOption("Cuba", "CU"));
	select.appendChild(createOption("Curacao", "CW"));
	select.appendChild(createOption("Cyprus", "CY"));
	select.appendChild(createOption("Czech Republic", "CZ"));
	select.appendChild(createOption("Denmark", "DK"));
	select.appendChild(createOption("Djibouti", "DJ"));
	select.appendChild(createOption("Dominica", "DM"));
	select.appendChild(createOption("Dominican Republic", "DO"));
	select.appendChild(createOption("Ecuador", "EC"));
	select.appendChild(createOption("Egypt", "EG"));
	select.appendChild(createOption("El Salvador", "SV"));
	select.appendChild(createOption("Equatorial Guinea", "GQ"));
	select.appendChild(createOption("Eritrea", "ER"));
	select.appendChild(createOption("Estonia", "EE"));
	select.appendChild(createOption("Ethiopia", "ET"));
	select.appendChild(createOption("Falkland Islands (Malvinas)", "FK"));
	select.appendChild(createOption("Faroe Islands", "FO"));
	select.appendChild(createOption("Fiji", "FJ"));
	select.appendChild(createOption("Finland", "FI"));
	select.appendChild(createOption("France", "FR"));
	select.appendChild(createOption("French Guiana", "GF"));
	select.appendChild(createOption("French Polynesia", "PF"));
	select.appendChild(createOption("French Southern Territories", "TF"));
	select.appendChild(createOption("Gabon", "GA"));
	select.appendChild(createOption("Gambia", "GM"));
	select.appendChild(createOption("Georgia", "GE"));
	select.appendChild(createOption("Germany", "DE"));
	select.appendChild(createOption("Ghana", "GH"));
	select.appendChild(createOption("Gibraltar", "GI"));
	select.appendChild(createOption("Greece", "GR"));
	select.appendChild(createOption("Greenland", "GL"));
	select.appendChild(createOption("Grenada", "GD"));
	select.appendChild(createOption("Guadeloupe", "GP"));
	select.appendChild(createOption("Guam", "GU"));
	select.appendChild(createOption("Guatemala", "GT"));
	select.appendChild(createOption("Guernsey", "GG"));
	select.appendChild(createOption("Guinea", "GN"));
	select.appendChild(createOption("Guinea-Bissau", "GW"));
	select.appendChild(createOption("Guyana", "GY"));
	select.appendChild(createOption("Haiti", "HT"));
	select.appendChild(createOption("Heard Island and Mcdonald Islands", "HM"));
	select.appendChild(createOption("Holy See (Vatican City State)", "VA"));
	select.appendChild(createOption("Honduras", "HN"));
	select.appendChild(createOption("Hong Kong", "HK"));
	select.appendChild(createOption("Hungary", "HU"));
	select.appendChild(createOption("Iceland", "IS"));
	select.appendChild(createOption("India", "IN"));
	select.appendChild(createOption("Indonesia", "ID"));
	select.appendChild(createOption("Iran, Islamic Republic of", "IR"));
	select.appendChild(createOption("Iraq", "IQ"));
	select.appendChild(createOption("Ireland", "IE"));
	select.appendChild(createOption("Isle of Man", "IM"));
	select.appendChild(createOption("Israel", "IL"));
	select.appendChild(createOption("Italy", "IT"));
	select.appendChild(createOption("Jamaica", "JM"));
	select.appendChild(createOption("Japan", "JP"));
	select.appendChild(createOption("Jersey", "JE"));
	select.appendChild(createOption("Jordan", "JO"));
	select.appendChild(createOption("Kazakhstan", "KZ"));
	select.appendChild(createOption("Kenya", "KE"));
	select.appendChild(createOption("Kiribati", "KI"));
	select.appendChild(createOption("Korea, Democratic People's Republic of", "KP"));
	select.appendChild(createOption("Korea, Republic of", "KR"));
	select.appendChild(createOption("Kosovo", "XK"));
	select.appendChild(createOption("Kuwait", "KW"));
	select.appendChild(createOption("Kyrgyzstan", "KG"));
	select.appendChild(createOption("Lao People's Democratic Republic", "LA"));
	select.appendChild(createOption("Latvia", "LV"));
	select.appendChild(createOption("Lebanon", "LB"));
	select.appendChild(createOption("Lesotho", "LS"));
	select.appendChild(createOption("Liberia", "LR"));
	select.appendChild(createOption("Libyan Arab Jamahiriya", "LY"));
	select.appendChild(createOption("Liechtenstein", "LI"));
	select.appendChild(createOption("Lithuania", "LT"));
	select.appendChild(createOption("Luxembourg", "LU"));
	select.appendChild(createOption("Macao", "MO"));
	select.appendChild(createOption("Macedonia, the Former Yugoslav Republic of", "MK"));
	select.appendChild(createOption("Madagascar", "MG"));
	select.appendChild(createOption("Malawi", "MW"));
	select.appendChild(createOption("Malaysia", "MY"));
	select.appendChild(createOption("Maldives", "MV"));
	select.appendChild(createOption("Mali", "ML"));
	select.appendChild(createOption("Malta", "MT"));
	select.appendChild(createOption("Marshall Islands", "MH"));
	select.appendChild(createOption("Martinique", "MQ"));
	select.appendChild(createOption("Mauritania", "MR"));
	select.appendChild(createOption("Mauritius", "MU"));
	select.appendChild(createOption("Mayotte", "YT"));
	select.appendChild(createOption("Mexico", "MX"));
	select.appendChild(createOption("Micronesia, Federated States of", "FM"));
	select.appendChild(createOption("Moldova, Republic of", "MD"));
	select.appendChild(createOption("Monaco", "MC"));
	select.appendChild(createOption("Mongolia", "MN"));
	select.appendChild(createOption("Montenegro", "ME"));
	select.appendChild(createOption("Montserrat", "MS"));
	select.appendChild(createOption("Morocco", "MA"));
	select.appendChild(createOption("Mozambique", "MZ"));
	select.appendChild(createOption("Myanmar", "MM"));
	select.appendChild(createOption("Namibia", "NA"));
	select.appendChild(createOption("Nauru", "NR"));
	select.appendChild(createOption("Nepal", "NP"));
	select.appendChild(createOption("Netherlands", "NL"));
	select.appendChild(createOption("Netherlands Antilles", "AN"));
	select.appendChild(createOption("New Caledonia", "NC"));
	select.appendChild(createOption("New Zealand", "NZ"));
	select.appendChild(createOption("Nicaragua", "NI"));
	select.appendChild(createOption("Niger", "NE"));
	select.appendChild(createOption("Nigeria", "NG"));
	select.appendChild(createOption("Niue", "NU"));
	select.appendChild(createOption("Norfolk Island", "NF"));
	select.appendChild(createOption("Northern Mariana Islands", "MP"));
	select.appendChild(createOption("Norway", "NO"));
	select.appendChild(createOption("Oman", "OM"));
	select.appendChild(createOption("Pakistan", "PK"));
	select.appendChild(createOption("Palau", "PW"));
	select.appendChild(createOption("Palestinian Territory, Occupied", "PS"));
	select.appendChild(createOption("Panama", "PA"));
	select.appendChild(createOption("Papua New Guinea", "PG"));
	select.appendChild(createOption("Paraguay", "PY"));
	select.appendChild(createOption("Peru", "PE"));
	select.appendChild(createOption("Philippines", "PH"));
	select.appendChild(createOption("Pitcairn", "PN"));
	select.appendChild(createOption("Poland", "PL"));
	select.appendChild(createOption("Portugal", "PT"));
	select.appendChild(createOption("Puerto Rico", "PR"));
	select.appendChild(createOption("Qatar", "QA"));
	select.appendChild(createOption("Reunion", "RE"));
	select.appendChild(createOption("Romania", "RO"));
	select.appendChild(createOption("Russian Federation", "RU"));
	select.appendChild(createOption("Rwanda", "RW"));
	select.appendChild(createOption("Saint Barthelemy", "BL"));
	select.appendChild(createOption("Saint Helena", "SH"));
	select.appendChild(createOption("Saint Kitts and Nevis", "KN"));
	select.appendChild(createOption("Saint Lucia", "LC"));
	select.appendChild(createOption("Saint Martin", "MF"));
	select.appendChild(createOption("Saint Pierre and Miquelon", "PM"));
	select.appendChild(createOption("Saint Vincent and the Grenadines", "VC"));
	select.appendChild(createOption("Samoa", "WS"));
	select.appendChild(createOption("San Marino", "SM"));
	select.appendChild(createOption("Sao Tome and Principe", "ST"));
	select.appendChild(createOption("Saudi Arabia", "SA"));
	select.appendChild(createOption("Senegal", "SN"));
	select.appendChild(createOption("Serbia", "RS"));
	select.appendChild(createOption("Serbia and Montenegro", "CS"));
	select.appendChild(createOption("Seychelles", "SC"));
	select.appendChild(createOption("Sierra Leone", "SL"));
	select.appendChild(createOption("Singapore", "SG"));
	select.appendChild(createOption("Sint Maarten", "SX"));
	select.appendChild(createOption("Slovakia", "SK"));
	select.appendChild(createOption("Slovenia", "SI"));
	select.appendChild(createOption("Solomon Islands", "SB"));
	select.appendChild(createOption("Somalia", "SO"));
	select.appendChild(createOption("South Africa", "ZA"));
	select.appendChild(createOption("South Georgia and the South Sandwich Islands", "GS"));
	select.appendChild(createOption("South Sudan", "SS"));
	select.appendChild(createOption("Spain", "ES"));
	select.appendChild(createOption("Sri Lanka", "LK"));
	select.appendChild(createOption("Sudan", "SD"));
	select.appendChild(createOption("Suriname", "SR"));
	select.appendChild(createOption("Svalbard and Jan Mayen", "SJ"));
	select.appendChild(createOption("Swaziland", "SZ"));
	select.appendChild(createOption("Sweden", "SE"));
	select.appendChild(createOption("Switzerland", "CH"));
	select.appendChild(createOption("Syrian Arab Republic", "SY"));
	select.appendChild(createOption("Taiwan, Province of China", "TW"));
	select.appendChild(createOption("Tajikistan", "TJ"));
	select.appendChild(createOption("Tanzania, United Republic of", "TZ"));
	select.appendChild(createOption("Thailand", "TH"));
	select.appendChild(createOption("Timor-Leste", "TL"));
	select.appendChild(createOption("Togo", "TG"));
	select.appendChild(createOption("Tokelau", "TK"));
	select.appendChild(createOption("Tonga", "TO"));
	select.appendChild(createOption("Trinidad and Tobago", "TT"));
	select.appendChild(createOption("Tunisia", "TN"));
	select.appendChild(createOption("Turkey", "TR"));
	select.appendChild(createOption("Turkmenistan", "TM"));
	select.appendChild(createOption("Turks and Caicos Islands", "TC"));
	select.appendChild(createOption("Tuvalu", "TV"));
	select.appendChild(createOption("Uganda", "UG"));
	select.appendChild(createOption("Ukraine", "UA"));
	select.appendChild(createOption("United Arab Emirates", "AE"));
	select.appendChild(createOption("United Kingdom", "GB"));
	select.appendChild(createOption("United States", "US"));
	select.appendChild(createOption("United States Minor Outlying Islands", "UM"));
	select.appendChild(createOption("Uruguay", "UY"));
	select.appendChild(createOption("Uzbekistan", "UZ"));
	select.appendChild(createOption("Vanuatu", "VU"));
	select.appendChild(createOption("Venezuela", "VE"));
	select.appendChild(createOption("Viet Nam", "VN"));
	select.appendChild(createOption("Virgin Islands, British", "VG"));
	select.appendChild(createOption("Virgin Islands, U.s.", "VI"));
	select.appendChild(createOption("Wallis and Futuna", "WF"));
	select.appendChild(createOption("Western Sahara", "EH"));
	select.appendChild(createOption("Yemen", "YE"));
	select.appendChild(createOption("Zambia", "ZM"));
	select.appendChild(createOption("Zimbabwe", "ZW"));
	countresDiv.appendChild(label);
	countresDiv.appendChild(select);
}