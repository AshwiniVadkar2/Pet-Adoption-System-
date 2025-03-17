class LargeSmall {
    public static void main(String args[]) {
        int a[] = {1, 2, 3, 4, 5};
        System.out.print("Numbers are: ");
        for (int i = 0; i < 5; i++) {
            System.out.print(a[i] + ",");
        }
        System.out.println(" ");
        int max = 0;
        int min = 1;
        for (int i = 0; i < 5; i++) {
            max = ((a[i]) > max) ? a[i] : max;
            min = ((a[i]) < min) ? a[i] : min;
        }
        System.out.println("Largest number is " + max + " and samllest is " + min);
    }
}
