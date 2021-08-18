name_of_bsfs_array = [];

function submit()
{

    var display_bsfs_array = [];

    for (var j = 1; j <= 7; j++)

    {

    var name_of_bsfs = document.getElementById("name_of_the_bsf_"+j).Value;

    console.log(name_of_bsfs);

    name_of_bsfs_array.push(name_of_bsfs);
 
    }

console.log(name_of_bsfs_array);

var length_of_name_of_bsfs_array = name_of_bsfs_array.length;

console.log(length_of_name_of_bsfs_array);

for(var k = 0; k < length_of_name_of_bsfs_array; k++)

{

display_bsfs_array.push("<h4>NAME -"+ name_of_bsfs_array[k] + "</h4>");

console.log(display_bsfs_array);

}

console.log(display_bsfs_array);

document.getElementById("display_bsfs_name_with_commas").innerHTML = display_bsfs_array;

var remove_commas = display_bsfs_array.join(" ");

console.log(remove_commas);

document.getElementById("display_bsfs_name_without_commas").innerHTML = remove_commas;

document.getElementById("submit_button").style.display = "none";

document.getElementById("sort_button").style.display = "inline_block";

}

function sorting()

{

name_of_bsfs_array.sort();

console.log(name_of_bsfs_array);

var display_bsfs_array_sorting = [];

var length_of_name_of_bsfs_array = length_of_name_of_bsfs_array.length;

console.log(length_of_name_of_bsfs_array);

for (var k = 0; k < length_of_name_of_bsfs_array; k++)

{

display_bsfs_array_sorting.push("<h4>NAME - " + name_of_bsfs_array[K] + "</h4>");

console.log(display_bsfs_array_sorting);

}

var remove_commas = display_bsfs_array_sorting.join(" ");

console.log(remove_commas);

document.getElementById("display_bsfs_name_without_commas").innerHTML = remove_commas;

}