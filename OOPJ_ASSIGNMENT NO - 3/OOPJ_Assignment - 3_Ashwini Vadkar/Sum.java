class Sum {
    public static void main(String args[]) {
        int a[] = {1, 2, 4, 5, 6, 7};
        int s[] = new int[a.length];
        int sum = 0;
        int S = 12;
        
        for (int i = 0; i <= a.length - 1; i++) {
            if (sum <= S) {
                sum += a[i];
                s[i] = a[i];
                if (sum == S) {
                    System.out.println(S + " Found as sum of sub string");
                    for (int f = 0; f <= i; f++) {
                        System.out.print(s[f] + " ");
                    }
                    break;
                }
            } else {
                System.out.println(S + " as sum of sub string not found");
            }
        }
    }
}
