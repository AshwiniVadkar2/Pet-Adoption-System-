public class ReverseStarNumberPattern {
    public static void main(String[] args) {
        int n = 5;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 5; j >= 6 - i; j--) {
                System.out.print(j);
                if (j > 6 - i) {
                    System.out.print("*");
                }
            }
            System.out.println();
        }
    }
}

