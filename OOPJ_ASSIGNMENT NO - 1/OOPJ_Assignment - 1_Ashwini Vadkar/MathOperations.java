public class MathOperations {
    public static void main(String args[]) {
        int num1 = 25;
        int num2 = 7;

        int sum = num1 + num2;
        int difference = num1 - num2;
        int product = num1 * num2;
        int quotient = num1 / num2;
        int remainder = num1 % num2;

        System.out.println("Numbers are: " + num1 + " and " + num2);
        System.out.println("Addition: " + sum);
        System.out.println("Subtraction: " + difference);
        System.out.println("Multiplication: " + product);
        System.out.println("Division: " + quotient);
        System.out.println("Modulus (Remainder): " + remainder);
    }
}
