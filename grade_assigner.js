const assignGrade = function(score) { // Re-wrote function code to what I learned within the course ()
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
};

for (let score = 60; score <= 100; score++){
    if (score <= 65){
        assignGrade(console.log("For scoring ", score, " points, you get an E"));
    } else if(score <= 70){
        assignGrade(console.log("For scoring ", score, " points, you get an D"));
    } else if(score <= 80){
        assignGrade(console.log("For scoring ", score, " points, you get an C"));
    } else if(score <= 90){
        assignGrade(console.log("For scoring ", score, " points, you get an B"));
    } else{
        assignGrade(console.log("For scoring ", score, " points, you get an A"));
    }
}
