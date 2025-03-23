import java.util.*;

class ElectricityBill {
    String customerName;
    double unitsConsumed;
    double billAmount;

    ElectricityBill(String customerName, double unitsConsumed) {
        if (unitsConsumed < 0) {
            throw new IllegalArgumentException("Units Consumed cannot be negative, please enter a positive number.");
        }
        this.customerName = customerName;
        this.unitsConsumed = unitsConsumed;
    }

    double calculateBillAmount() {
        if (unitsConsumed <= 100) {
            billAmount = unitsConsumed * 5;
        } else if (unitsConsumed <= 300) {
            billAmount = (100 * 5) + ((unitsConsumed - 100) * 7);
        } else {
            billAmount = (100 * 5) + (200 * 7) + ((unitsConsumed - 300) * 10);
        }
        return billAmount;
    }
}

class ElectricityBillDemo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        try {
            System.out.print("Enter Customer Name: ");
            String customerName = input.nextLine();

            System.out.print("Enter Units Consumed: ");
            double unitsConsumed = input.nextDouble();

            ElectricityBill e = new ElectricityBill(customerName, unitsConsumed);
            double bill = e.calculateBillAmount();

            System.out.println(customerName + " has consumed " + unitsConsumed + " units, so total bill: Rs. " + bill);
        } catch (InputMismatchException e) {
            System.out.println("Error: Invalid input. Please enter a numeric value for units consumed.");
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            input.close();
        }
    }
}
