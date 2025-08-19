import java.util.Scanner;
class Employee{
	int id;
	String name;
	String address;
	String phNo;
	
	public Employee(int id,String name,String address,String ph){
		this.id=id;
		this.name=name;
		this.address=address;
		this.phNo=ph;
	}
}

class EmployeeManage{
	
	public static void printObj(Employee e,int num){
		System.out.println("Employee "+(num+1)+" Details:");
		System.out.println("Name: "+e.name);
		System.out.println("Address: "+e.address);
		System.out.println("PhNo: "+e.phNo);
	}
	public static void main(String args[]){
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter number of Employees: ");
		int n=sc.nextInt();
		
		Employee[] emp=new Employee[n];
		
		for(int i=0;i<n;i++){
			System.out.println("Enter details of Employee"+(i+1)+" : ");
			System.out.print("name: ");
			String name=sc.next();
			System.out.print("address: ");
			String addr=sc.next();
			System.out.print("phone No: ");
			String ph=sc.next();
			emp[i]=new Employee(i,name,addr,ph);
		}
		
		for(int i=0;i<n;i++){
			System.out.println("=============================");
			printObj(emp[i],i);
		}
		
		sc.close();
		
	}
}