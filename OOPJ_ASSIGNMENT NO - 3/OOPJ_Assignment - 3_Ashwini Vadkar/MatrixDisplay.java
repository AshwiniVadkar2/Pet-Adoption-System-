import java.util.Scanner;
class MatrixDisplay {
    public static void main(String args[]) {
        int a[][] = new int[3][3];
        Scanner input = new Scanner(System.in);
        
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print("Enter the number: ");
                a[i][j] = input.nextInt();
            }
            System.out.println();
        }
        
        System.out.println("Array:");
        for (int ar[] : a) {
            for (int x : ar) {
                System.out.print(" " + x);
            }
            System.out.println();
        }
    }
}
