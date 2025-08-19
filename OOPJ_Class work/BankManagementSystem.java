import java.util.ArrayList;
import java.util.Scanner;

class Customer {
    private String name;
    private int accountNumber;
    private double balance;

    public Customer(String name, int accountNumber, double balance) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    @Override
    public String toString() {
        return "Account Number: " + accountNumber + ", Name: " + name + ", Balance: $" + balance;
    }
}

class Bank {
    private ArrayList<Customer> customers = new ArrayList<>();
    private int nextAccountNumber = 1001;

    public void addCustomer(String name, double balance) {
        customers.add(new Customer(name, nextAccountNumber++, balance));
        System.out.println("Customer added successfully!");
    }

    public void printCustomers() {
        if (customers.isEmpty()) {
            System.out.println("No customers available.");
            return;
        }
        System.out.println("Customer List:");
        for (Customer customer : customers) {
            System.out.println(customer);
        }
    }

    public void deleteCustomer(int accountNumber) {
        for (Customer customer : customers) {
            if (customer.getAccountNumber() == accountNumber) {
                customers.remove(customer);
                System.out.println("Customer deleted successfully!");
                return;
            }
        }
        System.out.println("Customer not found!");
    }
}

public class BankManagementSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Bank bank = new Bank();

        while (true) {
            System.out.println("\nBank Management System");
            System.out.println("1. Add New Customer");
            System.out.println("2. Print Customers");
            System.out.println("3. Delete Customer");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); 

            switch (choice) {
                case 1:
                    System.out.print("Enter customer name: ");
                    String name = scanner.nextLine();
                    System.out.print("Enter initial balance: ");
                    double balance = scanner.nextDouble();
                    bank.addCustomer(name, balance);
                    break;
                case 2:
                    bank.printCustomers();
                    break;
                case 3:
                    System.out.print("Enter account number to delete: ");
                    int accountNumber = scanner.nextInt();
                    bank.deleteCustomer(accountNumber);
                    break;
                case 4:
                    System.out.println("Exiting the system...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        }
    }
}