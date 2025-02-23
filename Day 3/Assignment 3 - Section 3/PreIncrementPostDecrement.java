public class PreIncrementPostDecrement {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        
        int result = ++a + b--;
        
        System.out.println("Result of expression (++a + b--): " + result);
        System.out.println("Value of a after expression: " + a);
        System.out.println("Value of b after expression: " + b);
    }
}
