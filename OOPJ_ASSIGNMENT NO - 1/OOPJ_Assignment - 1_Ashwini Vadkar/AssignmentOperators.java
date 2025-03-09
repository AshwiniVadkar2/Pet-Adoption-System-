import java.util.Scanner;

public class AssignmentOperators {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter first number (a): ");
        int a = input.nextInt();

        System.out.print("Enter second number (b): ");
        int b = input.nextInt();

        System.out.println("Initial values: a = " + a + ", b = " + b);

        a += b;
        System.out.println("After a += b, a = " + a);

        a -= b;
        System.out.println("After a -= b, a = " + a);

        a *= b;
        System.out.println("After a *= b, a = " + a);

        a /= b;
        System.out.println("After a /= b, a = " + a);

        a %= b;
        System.out.println("After a %= b, a = " + a);

        input.close();
    }
}
