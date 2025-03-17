import java.util.Scanner;

class Even {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        int[] a = new int[20];
        int[] even = new int[20];
        int[] odd = new int[20];
        int evencount = 0;
        int oddcount = 0;

        for (int i = 0; i < 20; i++) {
            System.out.println("Enter the number");
            a[i] = input.nextInt();
            if ((a[i] % 2) == 0) {
                even[evencount] = a[i];
                evencount++;
            } else {
                odd[oddcount] = a[i];
                oddcount++;
            }
        }

        System.out.println("Even numbers are: ");
        for (int i = 0; i < evencount; i++) {
            System.out.print(even[i] + " ");
        }
        System.out.println();

        System.out.println("Odd numbers are: ");
        for (int i = 0; i < oddcount; i++) {
            System.out.print(odd[i] + " ");
        }
    }
}
