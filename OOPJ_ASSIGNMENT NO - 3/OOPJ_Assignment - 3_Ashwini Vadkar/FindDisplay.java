import java.util.Scanner;

class FindDisplay {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        int a[] = new int[20];
        int even[] = new int[20];
        int odd[] = new int[20];
        int mult[] = new int[20];
        int evencount = 0;
        int oddcount = 0;
        int multcount = 0;

        for (int i = 0; i < 20; i++) {
            System.out.println("Enter the number");
            a[i] = input.nextInt();
        }

        for (int i = 0; i < 20; i++) {
            if ((a[i] % 2) == 0) {
                even[evencount] = a[i];
                evencount++;
            } else {
                odd[oddcount] = a[i];
                oddcount++;
            }

            if ((a[i] % 3) == 0) {
                mult[multcount] = a[i];
                multcount++;
            }
        }

        System.out.println("There are " + evencount + " even numbers. They are:");
        for (int i = 0; i < evencount; i++) {
            System.out.print(even[i] + " ");
        }
        System.out.println();

        System.out.println("There are " + oddcount + " odd numbers. They are:");
        for (int i = 0; i < oddcount; i++) {
            System.out.print(odd[i] + " ");
        }
        System.out.println();

        System.out.println("There are " + multcount + " multiples of 3. They are:");
        for (int i = 0; i < multcount; i++) {
            System.out.print(mult[i] + " ");
        }
        
        input.close();
    }
}
