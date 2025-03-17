class Merge {
    public static void main(String args[]) {
        int a[] = {1, 2, 3, 4, 5};
        int b[] = {11, 12, 13, 14, 15, 16};
        int merge[] = new int[11];
        
        System.out.println("2 array before merge");
        System.out.print("Array A: ");
        for (int i = 0; i < 5; i++) {
            System.out.print(a[i] + ",");
            merge[i] = a[i];
        }
        System.out.println();
        
        System.out.print("Array B: ");
        for (int i = 0; i < 5; i++) {
            System.out.print(b[i] + ",");
            merge[i + 5] = b[i];
        }
        System.out.println();
        
        System.out.println("Merge array:");
        for (int i = 0; i < merge.length - 1; i++) {
            System.out.print(merge[i] + ",");
        }
    }
}
