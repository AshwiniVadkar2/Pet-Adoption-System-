import java.util.Scanner;
class SwapOddEven {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int a = input.nextInt();
        int result = (a & 0xAAAAAAAA) >> 1 | (a & 0x55555555) << 1;
        System.out.println("After Swap: " + result);
    }
}
