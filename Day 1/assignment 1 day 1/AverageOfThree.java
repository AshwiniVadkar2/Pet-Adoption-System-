import java.util.Scanner;

public class AverageOfThree {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Input first number: ");
        double num1 = scanner.nextDouble();
        
        System.out.print("Input second number: ");
        double num2 = scanner.nextDouble();
        
        System.out.print("Input third number: ");
        double num3 = scanner.nextDouble();
        
        double average = (num1 + num2 + num3) / 3;
        
        System.out.println("The average is: " + average);
        
        scanner.close();
    }
}
