public class ArithmeticOperations {
    public static void main(String args[]) {
	    boolean condition = true;
		int a = 50;
		int b = 25;
		int sum = a + b;
		int sub = a - b;
		int mult = a * b;
		double div = (double) a/b;
		int mod = a % b;
		
		System.out.println("Numbers are " + a + " , " +b);
		System.out.println("Addition of numbers: " + sum);
		System.out.println("Subtraction of numbers: " + sub);
        System.out.println("Multiplication of numbers: " + mult);
        System.out.println("Division of numbers: " + div);
        System.out.println("Modulus of numbers: " + mod);
    }
}