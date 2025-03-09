public class Ascii {
    public static void main(String args[]) {
        char a = 'A';
        String b = "Hello";
        int asciiValue = a;

        System.out.println("Char literal: " + a);
        System.out.println("ASCII value of '" + a + "': " + asciiValue);
        System.out.println("String literal: " + b);

        for (char ch : b.toCharArray()) {
            System.out.println("ASCII value of '" + ch + "': " + (int) ch);
        }
    }
}
