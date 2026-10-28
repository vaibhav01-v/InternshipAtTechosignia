package Programs.Day3;

import java.util.Scanner;

/**
 * StudentManagment
 */
public class StudentManagment {

    private String name;
    private int rollNo;
    private double marks;

    StudentManagment(String name, int rollNo, double marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    void displayDetails() {
        System.out.println("\n--- Student Details ---");
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
        System.out.println("Marks: " + marks);
    }

    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter student name: ");
        String name = sc.nextLine();
        System.out.print("Enter roll number: ");
        int rollNo = sc.nextInt();
        System.out.print("Enter marks: ");
        double marks = sc.nextDouble();
        StudentManagment student = new StudentManagment(name, rollNo, marks);
        student.displayDetails();
        sc.close();
    }
}
