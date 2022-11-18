import java.util.*;
public class test {
	public static void main(String args[]) {
//		System.out.println("HEllo");
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter a Number: ");
		int num =sc.nextInt();
		int count=0;
		int x=num;
		for(int i=2;i<=num;i++) {
			if(x%i==0) {
				count++;
			}
		}
		if(count==1) {
			System.out.println(num+" is Prime.");
		}
		else {
			System.out.println(num+" is not Prime.");
		}
	}
}
