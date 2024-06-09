function calculateCGPA(){
   var totalCredits=0;
   var totalGradePoints=0;
   var numCourses=parseInt(prompt("Enter The Number Of Courses:"));

   for (var i=0;i<numCourses;i++){
      var coursescredits=parseFloat(prompt("Enter credits for  courses"+(i+1)+":"));
      var courseGrades=prompt("Enter Grade For Course"+(i+1)+":");

      var gradepoints=0;switch(courseGrades){
         case"A":
         gradepoints=5.0;
         break;
         case"B":
         gradepoints=4.0;
         break;
         case"C":
         gradepoints=3.0;
         break;
         case"D":
         gradepoints=1.0;
         break;
         default:
            alert("invalid grade.please enter A,B,C,OR D.");
            return;
      }
      totalCredits +=
      parseFloat(coursescredits);//convert to nmuber
      totalGradePoints+=
      parseFloat(coursescredits)*gradepoints;//convert to number
   }
   var CGPA=totalGradePoints/totalCredits;
   alert("Your CGPA is"+CGPA.toFixed(2));
}
calculateCGPA();