  
class Department{
    constructor(deptNaame){
        this.deptNaame=deptNaame;
    }
    show(){
        console.log("Department Name : "+this.deptNaame);
    }
}
class Students extends Department{
    constructor(deptnam,studentName,rollnumbr){
        super(deptnam);
        this.studentName=studentName;
        this.rollnumbr=rollnumbr;
    }
    display(){
        this.show();
        console.log("   "+this.studentName+"    "+this.rollnumbr);
    }

}
var objct=new Students("Computer System","Sunil","18cs32");
objct.display();