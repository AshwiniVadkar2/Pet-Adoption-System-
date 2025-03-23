class Student{
    String Name;
	int M1;
	int M2;
	int M3;
	void assign(String Name, int M1, int M2, int M3){
	    this.Name=Name;
		this.M1=M1;
		this.M2=M2;
		this.M3=M3;
	}
	int computeTotal(){
	    return M1+M2+M3;
	}
	double computeAvg(){
	    return computeTotal()/0.3;
	}
	void display(){
	    System.out.println("Name: "+Name);
	    System.out.println("Total Marks: "+computeTotal());
	    System.out.println("Average Marks: "+computeAvg());
	}
	public static void main(String args[]){
	    Student s = new Student();
		s.assign("Alce", 97, 85, 79);
		s.display();
	}
}	
		
		
	