import java.util.Scanner;
class Determine {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int a = input.nextInt();
        String result = a > 0 ? a + " is positive" : (a < 0 ? a + " is negative number" : a + " is zero");
        System.out.println(result);
    }
}
