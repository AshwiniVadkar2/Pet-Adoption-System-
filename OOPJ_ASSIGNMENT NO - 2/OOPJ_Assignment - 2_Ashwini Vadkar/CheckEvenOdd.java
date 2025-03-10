import java.util.Scanner;
class CheckEvenOdd {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = input.nextInt();
        String result = ((num & 1) == 0) ? num + " is Even" : num + " is Odd";
        System.out.println(result);
    }
}
