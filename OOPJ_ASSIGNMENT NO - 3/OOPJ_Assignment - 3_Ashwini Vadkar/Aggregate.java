import java.util.Scanner;

class Aggregate {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        int p[] = new int[20];
        int c[] = new int[20];
        int m[] = new int[20];

        for (int i = 0; i < 20; i++) {
            System.out.println("Enter the marks for Physics, Chemistry and Maths od student " + i);
            p[i] = input.nextInt();
            c[i] = input.nextInt();
            m[i] = input.nextInt();
        }

        int above75 = 0;
        int below45 = 0;

        for (int i = 0; i < 20; i++) {
            int total = p[i] + c[i] + m[i];
            double agg = total / 3;
            if (agg >= 75) {
                above75++;
            } else if (agg <= 45) {
                below45++;
            }
        }

        System.out.println(" Number of students securing 75% and above in aggregate: " + above75);
        System.out.println(" Number of students securing 40% and below in aggregate: " + below45);
    }
}
