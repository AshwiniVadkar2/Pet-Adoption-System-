import java.util.Scanner;

public class Q02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Input 2 Strings: ");
        String str1 = sc.nextLine();
        String str2 = sc.nextLine();
        System.out.println(str1 + " & " + str2 + " are anagrams? " + checkAnagram(str1, str2));
        
        System.out.println("Input a sentence: ");
        str1 = sc.nextLine();
        System.out.println("Longest Word in \"" + str1 + "\" is: " + findLargestWord(str1));
        
        int[] res = findVC(str1);
        System.out.println("Vowels: " + res[0] + ", Consonants: " + res[1]);
    }

    public static String findLargestWord(String s) {
        String[] words = s.split("\\s+");
        String longword = "";
        for (String word : words) {
            if (word.length() > longword.length()) {
                longword = word;
            }
        }
        return longword;
    }

    public static boolean checkAnagram(String s1, String s2) {
        s1 = s1.toLowerCase().replaceAll("[^a-z]", "");
        s2 = s2.toLowerCase().replaceAll("[^a-z]", "");

        if (s1.length() != s2.length()) return false;

        int[] frequency = new int[26];
        for (int i = 0; i < s1.length(); i++) {
            frequency[s1.charAt(i) - 'a']++;
            frequency[s2.charAt(i) - 'a']--;
        }

        for (int count : frequency) {
            if (count != 0) return false;
        }
        return true;
    }

    public static int[] findVC(String s) {
        s = s.toLowerCase();
        int vowels = 0, consonants = 0;

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (Character.isLetter(ch)) {
                if ("aeiou".indexOf(ch) != -1) {
                    vowels++;
                } else {
                    consonants++;
                }
            }
        }

        return new int[]{vowels, consonants};
    }
}
