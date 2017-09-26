$('document').ready(function(){
console.log('main.js is loaded');
var tdList = $('#tdlApp tr');

/*var tdMask = 'tdl_';

function showTasks(){
	var lsLen = localStorage.length;
	if(lsLen > 0){
		console.log("hellooo");
		for( var i = 0; i < lsLen; i++){
			var key = localStorage.key(i);
			if(key.indexOf(tdMask) == 0){
				$('<li></li>').addClass('tdItem')
					.attr('data-itemid', key)
					.text(localStorage.getItem(key)).appendTo(tdList);

			}
		}
	}
}
showTasks();
*/
//this function show us saved items.


$('input').on('keyup', function(){
		var v1 = $('#name').val();
		var v2 = $('#salary').val();
		var v3 = $('#parent').val();
		
		
	
		var txt = v1+ " ||  " + v2 + " ||  " + v3;
		$('#show').html(txt);

		

	//document.getElementById("demo").innerHTML = txt;
})
	$('button').on('click', function(){

		var v1 = $('#name').val();
		var v2 = $('#salary').val();
		var v3 = $('#parent').val();

		var Isfool = false;
		console.log(v1.length);
		console.log(v2.length);
		console.log(v3.length);

		if(v1.length > 0 && v2.length > 0)
			Isfool = true;
		

		var txt = v1+ " | " + v2 + " | " + v3;

	//localStorage.setItem('txt', JSON.stringify(txt));




	
	if(Isfool){
	/*var nId = 0;// ID

	tdList.children().each(function(index, el){
		var jelId = $(el).attr('data-itemid').slice(4);
		if(jelId > nId)
			nId = jelId;
	})
	nId++;

	localStorage.setItem(tdMask+nId, str);
    */
    //this func show us we use masc and 


	$('<li>').appendTo(tdList);

	$('<td></td>')
	//.attr('data-itemid', tdMask+nId)
	.text(txt).appendTo(tdList);
	$('</li>').appendTo(tdList);
}
(function(){
    var table = document.getElementById('edit');
    for (var i = 0; i < table.tBodies[0].rows.length; i++) {
        var row = table.tBodies[0].rows[i];
        row.onclick = onRowClick;
    }
    function onRowClick(event) {
        var target = event ? event.target : window.event.srcElement;
        this.onclick = null;
        this.className = 'editable';
        for (var i = 0; i < this.cells.length; i++) {
            var cell = this.cells[i];
            var input = document.createElement('input');
            // IE fails to change "type" property to unsupported value
            input.setAttribute('type', cell.getAttribute('data-type') || 'text');
            input.value = cell.firstChild.data;
            cell.replaceChild(input, cell.firstChild);
            if (cell == target)
                input.focus();
        }
    }
})();

		
});



//pear == Company Estimated Earnings
//ear ==  Company Estimated Earnings + Child Companies
var Companie ={
	constructor: function(name, pear, ear){
		this.name = name;
		this.pear = pear;
		this.ear = ear;
		return this;
	},
	show: function(){
		var txt = name + " | " + pear + " | " + ear;
		document.getElementById("show").innerHTML = txt;
	}



}



})

