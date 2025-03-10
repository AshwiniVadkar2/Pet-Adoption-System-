import java.util.Scanner;
class Case {
    public static void main(String args[]) {
        System.out.println("Enter the Charecter:");
        Scanner input = new Scanner(System.in);
        char c = input.next().charAt(0);
        String result = Character.isUpperCase(c) ? "UpperCase" : Character.isLowerCase(c) ? "Lowercase" : "not a letter";
        System.out.println(result);
    }
}
