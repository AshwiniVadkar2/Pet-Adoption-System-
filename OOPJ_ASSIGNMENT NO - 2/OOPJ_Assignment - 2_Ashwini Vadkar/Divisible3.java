import java.util.Scanner;

public class Divisible3 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the number:");
        int num = input.nextInt();
        input.close();
     
        int temp = Math.abs(num); 
        
        while (temp > 0) {
            temp = temp - 3;
        }

        if (temp == 0) {
            System.out.println("The number " + num + " is divisible by 3.");
        } else {
            System.out.println("The number " + num + " is not divisible by 3.");
        }
    }
}
