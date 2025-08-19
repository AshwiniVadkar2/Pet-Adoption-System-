abstract class Shape{
	protected String shapeName;
	Shape(String shapeName)
	{
		this.shapeName=shapeName;
	}
	String getShapeName(){
		return shapeName;
	}
	abstract double calculateArea() ;
}
class Circle extends Shape{
	private double radius;
	
	Circle(double radius)
	{
		super("Circle");
		this. radius=radius;
	} 
	@Override
	double calculateArea()
	{
		double Area=3.14*radius*radius;
		return Area;
	}
}
class Rectangle extends Shape{
	private double length;
	private double width;
	
	Rectangle(double length,double width)
	{
		super("Rectangle");
		this. length=length;
		this. width=width;
	} 
	@Override
	double calculateArea()
	{
		double Area=length*width;
		return Area;
	}
	
}
class testprogram{
	public static void main(String[] args){
		//for circle
		Shape circle = new Circle(5.0);
        System.out.println(circle.getShapeName() + " Area: " + circle.calculateArea());
        //for rectangle 
        Shape rectangle = new Rectangle(4.0, 6.0);
        System.out.println(rectangle.getShapeName() + " Area: " + rectangle.calculateArea());
		
	}
}