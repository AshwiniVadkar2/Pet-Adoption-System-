class MatrixDiagonal {
    public static void main(String args[]) {
        int a[][] = {{11, 12, 13}, {14, 15, 16}, {17, 18, 19}};
        int d = 0;

        System.out.println("Matrix A: ");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(a[i][j] + " ");
            }
            System.out.println();
        }

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (i == j || i == 0 && j == 2 || i == 2 && j == 0) {
                    d += a[i][j];
                }
            }
        }

        System.out.println("Sum of diagonals of Matrix A: " + d);
    }
}
