class EvenOdd {
    public static void main(String args[]) {
        int a[] = {1, 2, 3, 4, 5};
        int evencount = 0;
        int oddcount = 0;
        System.out.print("Numbers are: ");
        for (int i = 0; i < 5; i++) {
            System.out.print(a[i] + ",");
            if (((a[i]) % 2) == 0) {
                evencount++;
            } else {
                oddcount++;
            }
        }
        System.out.println("There are " + evencount + " even numbers and " + oddcount + " odd numbers");
    }
}
