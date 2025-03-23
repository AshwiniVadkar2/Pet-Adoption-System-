import java.util.*;
class BMICalculator{
	
    double height;
	double weight;
	BMICalculator(double height, double weight){
	    this.height=height;
		this.weight=weight;
	}
    double getHeight(){
        return height;
    }
    void setHeight(double height){
        this.height=height;	
	}
	double getWeight(){
	    return weight;
	}
    void setWeight(double weight){
        this.weight=weight;	
	}
    double BMI(){
        return weight / (height*height);
    }
}
class BMICalculatorDemo{
    public static void main(String args[])	{	
	    Scanner input=new Scanner(System.in);
	    System.out.println("Enter Height: ");
	    double height=input.nextDouble();
	    System.out.println("Enter Weight: ");
	    double weight=input.nextDouble();
	    BMICalculator e = new BMICalculator(height,weight);
	    double bmiResult= e.BMI();
        System.out.print("BMI is: " + bmiResult);
	
			
	}
}	
	
