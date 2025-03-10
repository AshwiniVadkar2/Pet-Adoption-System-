import java.util.Scanner;
class Absolute1 {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int num = input.nextInt();
        int absValue = (num < 0) ? -num : num;
        System.out.println("The absolute value is " + absValue);
    }
}
