import java.util.Scanner;
class Absolute {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int num = input.nextInt();
        int mask = num >> 31;
        int abs = (num + mask) ^ mask;
        System.out.println("The absolute value of an integer " + num + " is: " + abs);
    }
}
