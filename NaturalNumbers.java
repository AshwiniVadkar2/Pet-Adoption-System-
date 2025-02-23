import java.util.Scanner;

public class NaturalNumbers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Input a number: ");
        int n = scanner.nextInt();
        
        System.out.print("First " + n + " natural numbers: ");
        for (int i = 1; i <= n; i++) {
            System.out.print(i + " ");
        }
        
        scanner.close();
    }
}
