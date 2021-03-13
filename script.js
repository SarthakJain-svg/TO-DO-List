var arr = [];
var newarr = [];
var reviseArr = [];
var a = [];

function addItems(arry, val, element)
{
	var check_box = document.createElement("input");
	check_box.setAttribute("type", "checkbox");
	var label = document.createElement("label");
	var list = document.createElement("li");
	var date = new Date();
	var dt = document.createTextNode("\xa0" + "\xa0" + "\xa0" + "\xa0" + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
	list.appendChild(check_box);
	label.appendChild(arry[val]);
	label.appendChild(dt);
	list.appendChild(label);
	document.getElementById(element).appendChild(list);
}

function addTask()
{
	var input = document.getElementById("abc").value;
	var text = document.createTextNode(input);
	input.innerHTML = "";
	arr.push(text);
	addItems(arr, (arr.length)-1, "ulist");
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

function CompleteTask()
{
	checkMarkedItems("complete");
	DeleteTask();
	for(var k = 0; k < newarr.length; k++)
	{
		addItems(newarr, k, "ulist1");
	}
}

function DeleteCompleteTask()
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
	for(var m = 0; m < reviseArr.length; m++)
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