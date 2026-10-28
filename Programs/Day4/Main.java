package Programs.Day4;

import java.util.*;

class Student {
    private int id;
    private String name;
    private double marks;

    Student(int id, String name, double marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    int getId() {
        return id;
    }

    String getName() {
        return name;
    }

    double getMarks() {
        return marks;
    }

    public String toString() {
        return id + " | " + name + " | " + marks;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Student> list = new ArrayList<>();
        Map<Integer, Student> byId = new HashMap<>();
        try {
            System.out.print("How many students? ");
            int count = Integer.parseInt(sc.nextLine());
            for (int i = 0; i < count; i++) {
                System.out.print("ID: ");
                int id = Integer.parseInt(sc.nextLine());
                System.out.print("Name: ");
                String name = sc.nextLine();
                System.out.print("Marks: ");
                double marks = Double.parseDouble(sc.nextLine());
                Student s = new Student(id, name, marks);
                list.add(s);
                byId.put(id, s);
            }
            System.out.print("Search student ID: ");
            int searchId = Integer.parseInt(sc.nextLine());
            Student found = byId.get(searchId);
            System.out.println(found == null ? "Not found" : found);
            list.sort(Comparator.comparing(Student::getName,
                    String.CASE_INSENSITIVE_ORDER));
            System.out.println("Sorted by name:");
            list.forEach(System.out::println);
            System.out.println("Students with marks >= 75:");
            list.stream()
                    .filter(s -> s.getMarks() >= 75)
                    .forEach(System.out::println);
        } catch (NumberFormatException e) {
            System.out.println("Invalid input: enter numbers for ID, count, and marks.");
        } finally {
            sc.close();
        }
    }
}