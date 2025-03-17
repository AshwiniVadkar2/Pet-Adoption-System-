class RowColumn {
    public static void main(String args[]) {
        int a[][] = {{11, 12, 13}, {14, 15, 16}, {17, 18, 19}};
        int row[] = new int[a.length];
        int col[] = new int[a[0].length];

        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                row[i] += a[i][j];
                col[j] += a[i][j];
            }
        }

        System.out.println("Addition of rows is: ");
        for (int i = 0; i < 3; i++) {
            System.out.print(row[i] + " ");
        }
        System.out.println();

        System.out.println("Addition of columns is: ");
        for (int i = 0; i < 3; i++) {
            System.out.print(col[i] + " ");
        }
    }
}
