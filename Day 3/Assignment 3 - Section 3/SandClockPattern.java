public class SandClockPattern {
    public static void main(String[] args) {
        int n = 9;

        for (int i = n; i >= 1; i -= 2) {
            for (int space = 0; space < (n - i) / 2; space++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        for (int i = 3; i <= n; i += 2) {
            for (int space = 0; space < (n - i) / 2; space++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}

