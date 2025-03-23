import java.util.*;

class Student {
    String name;
    int rollNo;
    double marks[] = new double[5];
    double avg;
    char grade;
    int total;

    Student(String name, int rollNo, double marks[]) {
        this.name = name;
        this.rollNo = rollNo;
        for (int i = 0; i < 5; i++) {
            if (marks[i] < 0 || marks[i] > 100) {
                throw new IllegalArgumentException("Please enter valid marks.");
            } else {
                this.marks[i] = marks[i];
            }
        }
    }

    void calculateAverage() {
        for (int i = 0; i < 5; i++) {
            total += marks[i];
        }
        avg = total / 5.0;
    }

    void calculateGrade() {
        if (avg >= 90) {
            grade = 'A';
        } else if (avg >= 80 && avg < 90) {
            grade = 'B';
        } else if (avg >= 70 && avg < 80) {
            grade = 'C';
        } else if (avg >= 60 && avg < 70) {
            grade = 'D';
        } else {
            grade = 'F';
        }
    }

    void displayStudentInfo() {
        System.out.println("Student name: " + name);
        System.out.println("Student roll no.: " + rollNo);
        for (int i = 0; i < 5; i++) {
            System.out.println("Student marks in Subject " + i + " : " + marks[i]);
        }
        System.out.println("Average of students marks: " + avg);
        System.out.println("Grade of student: " + grade);
    }
}

class StudentDemo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        try {
            System.out.println("Enter the name of student: ");
            String name = input.nextLine();
            System.out.println("Enter Students roll no: ");
            int rollNo = input.nextInt();
            double marks[] = new double[5];
            for (int i = 0; i < 5; i++) {
                System.out.println("Enter marks for subject " + i + " :");
                marks[i] = input.nextDouble();
            }
            Student s = new Student(name, rollNo, marks);
            s.calculateAverage();
            s.calculateGrade();
            s.displayStudentInfo();
        } catch (InputMismatchException e) {
            System.out.println("Please enter the detail properly.");
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            input.close();
        }
    }
}
