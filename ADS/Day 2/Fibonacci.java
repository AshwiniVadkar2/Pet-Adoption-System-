import java.util.*;
public class Fibonacci{
	static int n,count=0;
	public static void main(String[] args){
		Scanner sc = new Scanner (System.in);
		n = sc.nextInt();
		fibonacci(0,1);
	}
	
	public static void fibonacci(int a, int b){
		if(count<n){
			System.out.print(a + " ");
			int c = a+b;
			a=b;
			b=c;
			count++;
			fibonacci(a,b);
		}
	}
}