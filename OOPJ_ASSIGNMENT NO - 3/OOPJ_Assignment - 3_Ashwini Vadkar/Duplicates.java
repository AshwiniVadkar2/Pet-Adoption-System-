class Duplicates {
    public static void main(String args[]) {
        int a[] = {5, 4, 3, 3, 1, 1, 2, 4};
        System.out.print("Numbers Before sorting: ");
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + ",");
        }
        System.out.println();
        
        for (int i = 0; i < a.length - 1; i++) {
            for (int j = 0; j < a.length - 1 - i; j++) {
                if (a[j] > a[j + 1]) {
                    int temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;
                }
            }
        }
        
        System.out.print("Numbers After sorting: ");
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + ",");
        }
        System.out.println();
        
        int count = 0;
        for (int i = 0; i < a.length - 1; i++) {
            for (int j = 0; j < a.length - 1 - i; j++) {
                if (a[j] == a[j + 1]) {
                    a[j + 1] = 0;
                    count++;
                }
            }
        }
        
        System.out.print("Numbers before duplicate removal: ");
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + ",");
        }
        System.out.println();
        
        int d[] = new int[a.length - count];
        int index = 0;
        for (int i = 0; i < a.length; i++) {
            if (a[i] != 0) {
                d[index++] = a[i];
            }
        }
        
        System.out.println();
        System.out.print("Numbers After removing duplicate: ");
        for (int i = 0; i < d.length; i++) {
            System.out.print(d[i] + ",");
        }
        System.out.println();
    }
}
