class SorteManage {
    public static void main(String args[]) {
        int a[] = {1, 5, 6, 7, 8, 10};
        int b[] = {2, 4, 9};
        int c[] = new int[a.length + b.length];

        System.out.println("Before merging and sorting array:");
        System.out.println("Array A: ");
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
        System.out.println("Array B: ");
        for (int i = 0; i < b.length; i++) {
            System.out.print(b[i] + " ");
        }
        System.out.println();

        for (int i = 0; i < a.length; i++) {
            c[i] = a[i];
        }
        for (int i = 0; i < b.length; i++) {
            c[a.length + i] = b[i];
        }

        for (int i = 0; i < c.length - 1; i++) {
            for (int j = 0; j < c.length - 1 - i; j++) {
                if (c[j] > c[j + 1]) {
                    int temp = c[j];
                    c[j] = c[j + 1];
                    c[j + 1] = temp;
                }
            }
        }

        for (int i = 0; i < a.length; i++) {
            a[i] = c[i];
        }
        for (int i = 0; i < b.length; i++) {
            b[i] = c[a.length + i];
        }

        System.out.println("Arrays after sorting:");
        System.out.println("Array A: ");
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
        System.out.println("Array B: ");
        for (int i = 0; i < b.length; i++) {
            System.out.print(b[i] + " ");
        }
    }
}
