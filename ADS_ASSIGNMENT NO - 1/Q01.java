import java.util.Arrays;
public class Q01{
	public static void main(String[] args){
		int[] arr = {10, 0, 5, 20, 0, 8, 15};
		System.out.println(Arrays.toString(arr));
		System.out.println("Second Largest: " + findSecLarge(arr));
		moveZeroes(arr);
		System.out.println(Arrays.toString(arr));
	}
	
	public static int findSecLarge(int arr[]){
		int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
		for(int i = 0; i<arr.length; i++){
			if(first<arr[i]){
				second = first;
				first = arr[i];
			} else {
				second = arr[i];
			}
		}
		return second;
	}
	
	public static void moveZeroes(int arr[]){
		int track=0;
		for(int	i=0; i<arr.length; i++){
			if(arr[i]!=0){
				arr[track++] = arr[i]; 
			}
		}
		for(int i = track; i<arr.length; i++){
			arr[i] = 0;
		}
	}
}