class MissingNumbers {
    public static void main(String args[]) {
        int a[] = {1, 2, 4, 5};
        int n = a.length + 1;
        int totalSum = (n * (n + 1)) / 2;
        int arraySum = 0;
        
        for (int i = 0; i < a.length; i++) {
            arraySum += a[i];
        }
        
        int missingNumber = totalSum - arraySum;
        System.out.println("Missing number is: " + missingNumber);
    }
}
