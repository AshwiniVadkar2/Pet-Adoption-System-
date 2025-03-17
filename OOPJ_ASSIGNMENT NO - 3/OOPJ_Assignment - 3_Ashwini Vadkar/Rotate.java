class Rotate {
    public static void main(String args[]) {
        int a[] = {1, 2, 3, 4, 5, 6, 7};
        int r[] = new int[7];
        int k = 4;
        int count = 0;
        
        System.out.print("Array before rotate: ");
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
        
        for (int i = 0; i < a.length; i++) {
            r[(i + k) % a.length] = a[i];
        }
        
        System.out.print("Array after rotate: ");
        for (int i = 0; i < a.length; i++) {
            System.out.print(r[i] + " ");
        }
        System.out.println();
    }
}
