import java.util.Arrays;
public class Q03{
	public static void main(String[] args){
		int arr[] = {1,3,3,3,5,6,8};
		int ans = BinarySearch(arr, 3);
		if(ans!=-1){
			System.out.println("Key found at index: " + ans);
		} else {
			System.out.println("Element not found");
		}
		
		int[] res = findOccurances(arr, 3);
		System.out.println("First occurance: " + res[0] + "\nLast occurance: " + res[1]);
		System.out.println("Total count of key: " + countOccurances(arr, 3));
		int array[] = {1,2,18,4,5,0};
		System.out.println("Peak Element: " + peakElement(array));
	
	}
	
	public static int BinarySearch(int[] arr, int x){
		int low = 0, high = arr.length-1;
		while(low<=high){
			int mid = low + (high - low)/2;
			if(arr[mid]==x)
				return mid;
			else if(arr[mid]<x)
				high = mid-1;
			else
				low = mid + 1;
		}
		return -1;	
	}
	
	public static int[] findOccurances(int[] arr, int key){
		int firstIndex=-1, lastIndex=-1;
		for(int i=0; i<arr.length; i++){
			if(arr[i] == key){
				if(firstIndex==-1)
					firstIndex = i;  	
				lastIndex=i;
			}
		}
		return new int[]{firstIndex, lastIndex};
	}
	
	public static int countOccurances(int[] arr, int key){
		int count=0;
		for(int i=0; i<arr.length; i++){
			if(arr[i] == key){
				count++;
			}
		}
		return count;
	}
	
	public static int peakElement(int[] arr){
		int peak=arr[0];
		for(int i=1; i<arr.length; i++)
			peak = arr[i]>peak?arr[i]: peak;
		return peak;
	}
}