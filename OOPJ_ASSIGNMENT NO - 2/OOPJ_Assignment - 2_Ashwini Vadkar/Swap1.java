public class Swap1 {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        
        System.out.println("Before swapping, a = " + a + " and b = " + b);
        
        a += b;
        b -= a;
        b = b < 0 ? -b : b;
        a -= b;
        
        System.out.println("After swapping, a = " + a + " and b = " + b);
    }
}
