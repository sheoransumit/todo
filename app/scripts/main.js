function addOptions(selectList, array, selectName){
	for (var i = 0; i < array.length; i++) {
	    var option = document.createElement("option");
	    option.value = array[i];
	    option.text = array[i];
	    option.name = selectName;	
	    selectList.appendChild(option);
	}
}

function initialize(){
	var taskStatus = ["pending", "doing", "done"];
	var members = ["Ram", "Shyam", "Sita", "Geeta"];
	addOptions(document.getElementById("employeeList"), members, "employee");
	addOptions(document.getElementById("statusMarker"), taskStatus, "status");
}

document.onload = initialize();

function openTasks(evt, taskStatus) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(taskStatus).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function save(){
	var taskTitle = document.getElementsByName("title")[0].value;
	var dueDate = document.getElementsByName("duedate")[0].value;
	if(taskTitle==""){
		alert("Title Cannot be Empty");
		return;
	}
	if(dueDate==""){
		alert("Assign a due date");
		return;
	}
	var employeeList = document.getElementById("employeeList").value;
	var statusMarker = document.getElementById("statusMarker").value;
	var taskDescription = document.getElementsByName("description")[0].value;
	var valArray = [dueDate, taskTitle, employeeList, taskDescription];
	var newPost = document.createElement('tr');
	var classes = ["due", "title", "employee", "desc"];
	for (var i=0; i<classes.length; i++){
		var newTd = document.createElement('td');
		newTd.setAttribute("class", classes[i]);
		var t = document.createTextNode(valArray[i]);
		newTd.appendChild(t);
		newPost.appendChild(newTd);
	}
	// Edit Button
	var editButton = document.createElement('button');
	var edittext = document.createTextNode('edit');
	editButton.appendChild(edittext);
	editButton.setAttribute('onclick','edit(this.parentNode.parentNode)');
	var newEdit = document.createElement('td');
	newEdit.appendChild(editButton);
	newPost.appendChild(newEdit);
	
	var selectedTable = document.getElementById(statusMarker).getElementsByTagName("tbody")[0];
	selectedTable.appendChild(newPost);
	document.getElementById("myForm").reset();
}

function edit(param){
	console.log(param);
	document.getElementsByName("title")[0].value = param.childNodes[1].innerHTML;
	document.getElementsByName("duedate")[0].value = param.childNodes[0].innerHTML;
	document.getElementById("employeeList").value = param.childNodes[2].innerHTML;
	document.getElementById("statusMarker").value = param.parentNode.parentNode.parentNode.id;
	document.getElementsByName("description")[0].value = param.childNodes[3].innerHTML;
	var parent = param.parentNode;
	parent.removeChild(param);
}