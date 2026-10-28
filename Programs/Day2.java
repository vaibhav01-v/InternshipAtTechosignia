package Programs;

import java.util.Scanner;

public class Day2 {
    Scanner sc = new Scanner(System.in);

    public void EvenOdd() {
        int no = sc.nextInt();
        if (no % 2 == 0) {
            System.err.println("Even NO Found :" + no);
        } else {
            System.err.println("Odd No Found :" + no);
        }
    }

    public void LargestNo() {
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        // int num=0;

        if (a >= b && a > c) {
            System.err.println(a + " This is largest no");
        } else if (b >= a && b >= c) {
            System.out.println(b + " This is largest no");
        } else {
            System.out.println(c + " This is largest no");
        }

    }

    public void FactorialNo() {
        int num = sc.nextInt();
        int fact = 1;
        for (int i = 1; i <= num; i++) {
            fact *= i;
        }
        System.err.println(fact);
    }

    public void PrimeNo() {
        int no = sc.nextInt();
        boolean isPrime = no >= 2;
        for (int i = 2; i <= no / i; i++) {
            if (no % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            System.out.println("Prime Number");
        } else {
            System.out.println("Not a Prime Number");
        }
    }

    public void ReverseNo() {
        // int no = 1234;
        // int reverse = 0;
        // while (no>0) {
        // int digit = no % 10;
        // System.err.println(digit);
        // reverse = reverse * 10 + digit;
        // int last=no/10;
        // }
        // System.err.println(reverse);
        int n = 1234;
        int reverse = 0;
        while (n > 0) {
            int digit = n % 10;
            reverse = reverse * 10 + digit;
            n = n / 10;

        }
        System.err.println(reverse);
    }

    public void MultiplicationTable() {
        int n = sc.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.err.println(n + "x" + n + " =" + n * i);
        }
    }

    public static void main(String[] args) {
        Day2 d = new Day2();
        d.EvenOdd();
        d.LargestNo();
        d.FactorialNo();
        d.PrimeNo();
        d.ReverseNo();
        d.MultiplicationTable();
    }
}
