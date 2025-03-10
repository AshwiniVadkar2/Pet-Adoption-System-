import java.util.Scanner;
class Vowel {
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the Charecter: ");
        char a = input.next().charAt(0);
        
        String result = (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u' || 
                         a == 'A' || a == 'E' || a == 'I' || a == 'O' || a == 'U') ? 
                        a + " is in vowel" : a + " is consonant ";
        
        System.out.print(result);
    }
}
