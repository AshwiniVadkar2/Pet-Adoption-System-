import java.util.Scanner;
class Result {
    public static void main(String args[]) {
        System.out.println("Enter the percentage of Student:");
        Scanner input = new Scanner(System.in);
        int percentage = input.nextInt();
        String remark = percentage >= 40 ? "Pass" : "Fail";
        System.out.println(remark);
    }
}
