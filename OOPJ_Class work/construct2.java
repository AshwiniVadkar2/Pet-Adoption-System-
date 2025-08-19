class Parent{
	Parent()
	{
		System.out.println("I am almighty");
	}
}

class Child extends Parent{
	Child(int i)
	{	System.out.println("i="+i);
		System.out.println("I am atomic");
	}
}
class construct2{
	public static void main(String args[]){
		Child n= new Child(10);
	}
	
	
}