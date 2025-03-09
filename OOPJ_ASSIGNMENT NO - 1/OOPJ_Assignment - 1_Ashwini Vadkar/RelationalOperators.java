public class RelationalOperators {
    public static void main(String args[]) {
        int num1 = 15;
        int num2 = 25;

        boolean isEqual = num1 == num2;
        boolean isNotEqual = num1 != num2;
        boolean isGreater = num1 > num2;
        boolean isLess = num1 < num2;
        boolean isGreaterOrEqual = num1 >= num2;
        boolean isLessOrEqual = num1 <= num2;

        System.out.println("Numbers: num1 = " + num1 + ", num2 = " + num2);
        System.out.println("num1 == num2: " + isEqual);
        System.out.println("num1 != num2: " + isNotEqual);
        System.out.println("num1 > num2: " + isGreater);
        System.out.println("num1 < num2: " + isLess);
        System.out.println("num1 >= num2: " + isGreaterOrEqual);
        System.out.println("num1 <= num2: " + isLessOrEqual);
    }
}
