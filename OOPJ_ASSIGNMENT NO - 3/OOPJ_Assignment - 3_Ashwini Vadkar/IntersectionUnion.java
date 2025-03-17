class IntersectionUnion {
    public static void main(String args[]) {
        int a[] = {1, 2, 3, 4, 6};
        int b[] = {1, 2, 5, 7};
        int s = (a.length < b.length) ? a.length : b.length;
        int inter[] = new int[s];
        int union[] = new int[a.length + b.length];
        int interIndex = 0;
        int unionIndex = 0;
        
        System.out.println("a= {1,2,3,4,6}");
        System.out.println("b= {1,2,5,7}");
        
        // Finding intersection
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < b.length; j++) {
                if (a[i] == b[j]) {
                    inter[interIndex++] = a[i];
                    break;
                }
            }
        }
        
        System.out.print("Intersection of array A and B: ");
        for (int i = 0; i < interIndex; i++) {
            System.out.print(inter[i] + " ");
        }
        System.out.println();
        
        // Finding union
        for (int i = 0; i < a.length; i++) {
            union[unionIndex++] = a[i];
        }
        for (int i = 0; i < b.length; i++) {
            boolean found = false;
            for (int j = 0; j < a.length; j++) {
                if (b[i] == a[j]) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                union[unionIndex++] = b[i];
            }
        }
        
        // Sorting union array
        for (int i = 0; i < unionIndex - 1; i++) {
            for (int j = 0; j < unionIndex - 1 - i; j++) {
                if (union[j] > union[j + 1]) {
                    int temp = union[j];
                    union[j] = union[j + 1];
                    union[j + 1] = temp;
                }
            }
        }
        
        System.out.print("Union after sorting: ");
        for (int i = 0; i < unionIndex; i++) {
            System.out.print(union[i] + " ");
        }
        System.out.println();
    }
}
