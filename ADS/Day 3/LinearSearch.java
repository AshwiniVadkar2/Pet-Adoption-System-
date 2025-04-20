public class LinearSearch{
	public static void main(String[] args){
		int arr[] = {1,2,3,4,5};
		int x = 3;
		int ans =  linearSearch(arr, x);
		if(ans==-1)
			System.out.println("Element doesn't exist");
		else
			System.out.println("Element " + x + " found at index: " + ans);
	}
	
	public static int linearSearch(int[] arr, int x){
		for(int i=0; i<arr.length; i++){
			if(arr[i]==x)
				return i;
		}
		return -1;
	}
}