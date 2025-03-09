import java.util.Scanner;

public class CheckNumber {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the number:");
        int num = input.nextInt();

        if (num >= 0 && num % 2 == 0) {
            System.out.println("Condition matched");
        } else {
            System.out.println("Condition not matched");
        }
        
        input.close();
    }
}

