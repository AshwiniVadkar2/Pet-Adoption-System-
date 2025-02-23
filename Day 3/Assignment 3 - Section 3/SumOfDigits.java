public class SumOfDigits {
    public static void main(String[] args) {
        int number = 9876;
        int sum = 0;
        
        while (number != 0) {
            sum += number % 10;
            number /= 10;
        }
        
        System.out.println("The sum of the digits of 9876 is: " + sum);
    }
}
