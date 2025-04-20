public class Q04{
	public static void main(String[] args){
		int x=27;
		System.out.println("Is prime: " + findPrime(x, 2));
		String s = "racecar";
		System.out.println("Is '" + s + "' a palindrome? " + checkPalindrome(s,0,s.length()-1));
		x=1234;
		System.out.println("Sum of digits of " + x + ": " + digitSum(x));
		x=6;
		System.out.println("Fibonacci(" + x + "): " + fibonacci(0,1,x,0));
		x=2;
		int y=5;
		System.out.println(x + "^" + y + " = " + power(x,y));
	}
	
	public static boolean checkPalindrome(String s, int low, int high){
		if(low>=high){
			return true;
		} else {
			if(s.charAt(low)!=s.charAt(high))
				return false;
			return checkPalindrome(s,low+1,high-1);	
		}
	}
	
	public static int digitSum(int n){
		if(n==0){
			return 0;
		} else {
			return (n%10)+digitSum(n/10);
		}
	}
	
	public static boolean findPrime(int x,int i){
		if(i>=(int)Math.sqrt(x)){
			return true;
		} else {
			if(x%i==0)
				return false;
			return findPrime(x,i+1);
		}	
	}
	
	public static int fibonacci(int x, int y, int n, int i){
		if(i==n){
			return x;	
		} else {
			return fibonacci(y, x+y, n, i+1); 			
		}
	}
	
	public static int power(int x, int y){
		if(y==1){
			return x;
		} else {
			return x*power(x, y-1);	
		}
	}
}
