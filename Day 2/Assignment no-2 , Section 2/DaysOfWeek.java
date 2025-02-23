import java.util.Scanner;

public class DaysOfWeek {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter a number (1-7) for the day of the week: ");
        int day = scanner.nextInt();
        
        switch (day) {
            case 1:
                System.out.println("Monday");
                switchType("Weekday");
                break;
            case 2:
                System.out.println("Tuesday");
                switchType("Weekday");
                break;
            case 3:
                System.out.println("Wednesday");
                switchType("Weekday");
                break;
            case 4:
                System.out.println("Thursday");
                switchType("Weekday");
                break;
            case 5:
                System.out.println("Friday");
                switchType("Weekday");
                break;
            case 6:
                System.out.println("Saturday");
                switchType("Weekend");
                break;
            case 7:
                System.out.println("Sunday");
                switchType("Weekend");
                break;
            default:
                System.out.println("Invalid input! Please enter a number between 1 and 7.");
        }

        scanner.close();
    }

    
    public static void switchType(String type) {
        switch (type) {
            case "Weekday":
                System.out.println("It is a weekday.");
                break;
            case "Weekend":
                System.out.println("It is the weekend!");
                break;
        }
    }
}

                