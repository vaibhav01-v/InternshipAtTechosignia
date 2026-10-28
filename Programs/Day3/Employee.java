package Programs.Day3;

public class Employee {
    private  String name;
    private double salary;

    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    void displayDetails() {
        System.out.println("Employee: " +name);
        System.out.println("Salary: " + salary);
    }
    public static void main(String[] args) {
        Employee e =new Employee("vaibhav", 10);
        e.displayDetails();
    }
}
