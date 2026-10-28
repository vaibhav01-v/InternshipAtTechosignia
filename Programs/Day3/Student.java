package Programs.Day3;

/**
 * StudentAndEmployee
 */
public class Student {

    private String name;
    private int rollNo;

    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNo);
    }
    public static void main(String[] args) {
        Student s=new Student("vaibhav", 21);
        s.displayDetails();
    }
}
