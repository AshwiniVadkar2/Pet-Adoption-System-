public class FibonacciSequence {
    public static void main(String[] args) {
        int a = 0, b = 1;
        System.out.print("Fibonacci sequence up to 21: " + a + " " + b);
        
        while (b <= 21) {
            int next = a + b;
            if (next > 21) break;
            System.out.print(" " + next);
            a = b;
            b = next;
        }
    }
}
