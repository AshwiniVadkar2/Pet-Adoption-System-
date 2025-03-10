import java.util.Scanner;

public class Sum {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = input.nextInt();
        int sum = 0;
        
        while (n != 0) {
            int temp = n % 10;
            sum = sum + temp;
            n = n / 10;
        }
        
        System.out.println("Sum of intiger is: " + sum);
    }
}

