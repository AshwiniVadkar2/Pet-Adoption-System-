import java.util.Scanner;
class Multiply {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int n = input.nextInt();
        int result = n << 3;
        System.out.println(result);
    }
}
