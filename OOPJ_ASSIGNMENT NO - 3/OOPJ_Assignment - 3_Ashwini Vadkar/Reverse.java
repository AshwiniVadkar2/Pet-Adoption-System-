class Reverse {
    public static void main(String args[]) {
        int a[] = {1, 2, 3, 4, 5};
        int r[] = new int[5];
        System.out.print("befor reverse array: ");
        for (int i = 0; i < 5; i++) {
            System.out.print(a[i] + ",");
        }
        System.out.println();
        for (int i = 0; i < 5; i++) {
            r[i] = a[4 - i];
        }
        System.out.print("After reverse araay:");
        for (int i = 0; i < 5; i++) {
            System.out.print(r[i] + ",");
        }
    }
}
