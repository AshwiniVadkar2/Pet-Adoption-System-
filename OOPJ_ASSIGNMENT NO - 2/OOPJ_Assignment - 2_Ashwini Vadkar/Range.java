import java.util.Scanner;
class Range {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int num = input.nextInt();
        
        String result = (num >= 20 && num <= 50) ? num + " is in range" : num + " is not of range";
        
        System.out.print(result);
    }
}
