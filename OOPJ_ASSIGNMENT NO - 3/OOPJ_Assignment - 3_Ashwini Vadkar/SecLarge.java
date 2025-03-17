class SecLarge {
    public static void main(String args[]) {
        int a[] = {1, 2, 3, 4, 5};
        System.out.print("Numbers are: ");
        for (int i = 0; i < 5; i++) {
            System.out.print(a[i] + ",");
        }
        System.out.println(" ");
        int max = 0;
        int max1 = 0;
        for (int i = 0; i < 5; i++) {
            max = ((a[i]) > max) ? a[i] : max;
        }
        for (int i = 0; i < 5; i++) {
            if ((a[i]) > max1) {
                if ((a[i]) < max) {
                    max1 = a[i];
                }
            }
        }
        System.out.println(" Second Largest number is " + max1);
    }
}
