import java.util.Scanner;

public class PrimeCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Input number: ");
        int num = scanner.nextInt();
        boolean isPrime = true;
        
        if (num <= 1) {
            isPrime = false;
        } else {
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        
        if (isPrime) {
            System.out.println("The number " + num + " is Prime.");
        } else {
            System.out.println("The number " + num + " is not Prime.");
        }
        
        scanner.close();
    }
}
