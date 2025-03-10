import java.util.Scanner;
class Power {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int n = input.nextInt();
        
        if ((n & (n - 1)) == 0 && n > 0) {
            System.out.print(n + " is power of 2");
        } else {
            System.out.print(n + " is not power of 2");
        }
    }
}
