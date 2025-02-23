import java.util.Scanner;

public class DigitCounter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Input number: ");
        int number = scanner.nextInt();
        
        int digitCount = String.valueOf(number).length();
        
        System.out.println("The number " + number + " has " + digitCount + " digits.");
        
        scanner.close();
    }
}
