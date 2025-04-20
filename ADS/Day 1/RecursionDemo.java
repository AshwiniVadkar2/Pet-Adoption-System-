public class RecursionDemo{
	public static void main(String[] args){
		System.out.println(recur(2));
	}
	
	public static int recur(int a){
		if (a==4){
			return a;
		} else {
			return 2*(recur(a+1));
		}
	}
}