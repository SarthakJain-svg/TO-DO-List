var arr = [];
var newarr = [];
var reviseArr = [];
var a = [];

window.onload= function (){
	document.getElementById('abc').addEventListener("keyup", function (event) { 
		if (event.code == "Enter") 
		{ 
			addTask(); 
		} 
	});
}

function addItems(arry, val, element)
{
	var check_box = document.createElement("input");
	check_box.setAttribute("type", "checkbox");
	var label = document.createElement("label");
	var list = document.createElement("li");
	var span = document.createElement("span");
	span.style.display = "none";
	var paragraph = document.createElement("p");
	paragraph.style.display = "none";
	var date = new Date();
	var space = document.createTextNode("\xa0" + "\xa0");
	var dt = document.createTextNode(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
	list.appendChild(check_box);
	list.appendChild(space);
	label.appendChild(arry[val]);
	paragraph.appendChild(dt);
	list.appendChild(label);
	list.appendChild(paragraph);
	list.appendChild(span);
	document.getElementById(element).appendChild(list);
}

function addTask()
{
	var input = document.getElementById("abc").value;
	if(input == "")
	{
		alert("Please Enter the Item");
	}
	else
	{
		var text = document.createTextNode(input);
		document.getElementById("abc").value = "";
		arr.push(text);
		localStorage.setItem("ListItem" + (localStorage.length + 1), input);
		addItems(arr, (arr.length)-1, "ulist");
	}
}

function checkMarkedItems(activity)
{
	var x = document.querySelectorAll("#ulist input[type=checkbox]");
	var index = 0;
	for(var  i = 0; i < x.length; i++)
	{
		if(x[i].checked === true)
        {
			if(activity == "delete")
			{
				arr[i] = "";
			}
			if(activity == "complete")
			{
				newarr[index++] = arr[i];
			}
        }
	}
	if(activity == "delete")
	{
		reviseArr = arr;
	}
}

function DeleteTask()
{
	if(arr.length > 0)
	{
		checkMarkedItems("delete");
		for(var j = 0; j < reviseArr.length; j++)
		{
			if(reviseArr[j] == "")
			{
				reviseArr.splice(j, 1);
				j = -1;
			}
		}
		arr = reviseArr;
		document.getElementById("ulist").innerHTML = "";
		for(var i = 0; i < reviseArr.length; i++)
		{
			addItems(reviseArr, i, "ulist");
		}
	}
	else
	{
		alert("Add the List Items to delete");
	}
}

function CompleteTask()
{
	if(arr.length > 0)
	{
		checkMarkedItems("complete");
		DeleteTask();
		for(var k = 0; k < newarr.length; k++)
		{
			addItems(newarr, k, "ulist1");
		}
	}
	else
	{
		alert("Add the List Items to complete");
	}
}

function DeleteCompleteTask()
{
	if(newarr.length > 0)
	{
		var z = document.querySelectorAll("#ulist1 input[type=checkbox]");
		for(var  l = 0; l < z.length; l++)
		{
			if(z[l].checked === true)
			{
				newarr[l] = "";
			}
		}
		a = newarr;
		for(var m = 0; m < a.length; m++)
		{
			if(a[m] == "")
			{
				a.splice(m, 1);
				m = -1;
			}
		}
		newarr = a;
		document.getElementById("ulist1").innerHTML = "";
		for(var n = 0; n < a.length; n++)
		{
			addItems(a, n, "ulist1");
		}
	}
	else
	{
		alert("Add the List Items to delete");
	}
}

function addDescription()
{
	if(arr.length > 0)
	{
		var h = document.querySelectorAll("#ulist input[type=checkbox]");
		if(document.querySelectorAll("#ulist input[type=checkbox]:checked").length < 2)
		{
			for(var v = 0; v < h.length; v++)
			{
				if(h[v].checked === true)
				{
					var inputData = prompt("Enter the description : ");
					var ulist = document.getElementById("ulist");
					for(var g = 0; g < ulist.children.length; g++)
					{
						ulist.children[g].setAttribute("id", "list" + (g+1));
					}
					var list = document.getElementById("list" + (v + 1));
					list.children[3].innerHTML = inputData;
					h[v].checked = false;
					if(inputData != null)
					{
						alert("Successfully added");
					}
				}
			}
		}
		else
		{
			alert("Add Description for one List Item at a time");
		}
	}
	else
	{
		alert("Add the List Items to add description");
	}
}

function viewDescription()
{
	if(arr.length > 0)
	{
		var t = document.querySelectorAll("#ulist input[type=checkbox]");
		if(document.querySelectorAll("#ulist input[type=checkbox]:checked").length < 2)
		{
			for(var u = 0; u < t.length; u++)
			{
				if(t[u].checked === true)
				{
					var list = document.getElementById("list" + (u + 1));
					alert("Added Date : " + list.children[2].textContent + "\n" + "Description is : " + list.children[3].textContent);
					t[u].checked = false;
				}
			}
		}
		else
		{
			alert("View Description for one List Item at a time");
		}
	}
	else
	{
		alert("Add the List Items to view description");
	}
}