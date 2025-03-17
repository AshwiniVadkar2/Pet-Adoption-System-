class MatrixRotate {
    public static void main(String args[]) {
        int a[][] = {{11, 12, 13}, {14, 15, 16}, {17, 18, 19}};
        int r[][] = new int[3][3];

        System.out.println("Matrix A: ");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(a[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println("Rotating 90° of Matrix A: ");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                r[j][2 - i] = a[i][j];
            }
        }

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(r[i][j] + " ");
            }
            System.out.println();
        }
    }
}
