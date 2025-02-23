import java.util.Scanner;

public class PowerCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Input base number: ");
        int base = scanner.nextInt();
        
        System.out.print("Input exponent number: ");
        int exponent = scanner.nextInt();
        
        double result = Math.pow(base, exponent);
        
        System.out.println(base + " raised to the power " + exponent + " is " + (int)result);
        
        scanner.close();
    }
}
