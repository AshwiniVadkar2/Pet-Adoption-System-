import java.util.Scanner;

public class DiscountCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter total purchase amount (Rs.): ");
        double purchaseAmount = scanner.nextDouble();

        System.out.print("Do you have a membership card? (yes/no): ");
        String membership = scanner.next().toLowerCase();

        double discount = 0;

        if (purchaseAmount >= 1000) {
            discount = 20;
        } else if (purchaseAmount >= 500) {
            discount = 10;
        } else {
            discount = 5;
        }

        if (membership.equals("yes")) {
            discount += 5;
        }

        double discountAmount = (discount / 100) * purchaseAmount;
        double finalPrice = purchaseAmount - discountAmount;

        System.out.println("Applicable Discount: " + discount + "%");
        System.out.println("Discount Amount: Rs. " + discountAmount);
        System.out.println("Final Price to Pay: Rs. " + finalPrice);

        scanner.close();
    }
}
