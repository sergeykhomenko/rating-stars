var starsCount = 5;

var starsBoxes = document.querySelectorAll('.stars-outer');

for(var i = 0; i < starsBoxes.length; i++){
    var childs = starsBoxes[i].children;
    var starValue = false;
    var starCounter = false;
    
    for(var j = 0; j < childs.length; j++){
        if(childs[j].className == 'star-value'){
            starValue = +childs[j].value;
        }

        if(childs[j].className == 'star-counter'){
            starCounter = +childs[j].value;
        }
    }

    starsBoxes[i].lastElementChild.style.width = getRatingPercentage(starValue, starCounter);
}


function getRatingPercentage(votesSum = 0, votesCount = 0){
    var percentage = 100 / (votesCount * starsCount) * votesSum;
    return percentage + '%';
}