class MatrixMax {
    public static void main(String args[]) {
        int a[][] = {{11, 21, 13}, {14, 51, 16}, {117, 18, 91}};
        int max = 0;
        
        System.out.println("Matrix:");
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                System.out.print(a[i][j] + " ");
                if (a[i][j] > max) {
                    max = a[i][j];
                }
            }
            System.out.println();
        }
        
        System.out.println("Maximum number in matrix is: " + max);
    }
}
