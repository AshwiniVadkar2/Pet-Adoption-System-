public class TowerOfHanoi{
	public static void main(String[] args){
		toh(3,'A','B','C');
	}
	
	public static void toh(int n, char s, char inter, char d){
		if(n==1){
			System.out.println("move disk from " + s + " to " + d);
		} else {
			toh(n-1, s, d, inter);
			System.out.println("move disk from " + s + " to " + d);
			toh(n-1, inter, s, d);	
		}
	}
}