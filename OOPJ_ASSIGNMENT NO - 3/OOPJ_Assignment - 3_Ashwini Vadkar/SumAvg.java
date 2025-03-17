class SumAvg {
    public static void main(String args[]) {
        int a[] = {1, 2, 3, 4, 5};
        int sum = 0;
        int avg = 0;
        System.out.print("Numbers are: ");
        for (int i = 0; i < 5; i++) {
            System.out.print(a[i] + ",");
            sum += a[i];
        }
        System.out.println();
        avg = sum / a.length;
        System.out.println("Sum:" + sum);
        System.out.println("Average:" + avg);
    }
}
