import java.util.Scanner;
public class ReverseString{
	Node top;
	static class Node{
		char data;
		Node next;
		Node(char data){
			this.data =data;
			next = null;
		}
	}
	
	public boolean isEmpty(){
		return top==null;
	}
	
	public void push(char ch){
		Node newNode = new Node(ch);
		if(isEmpty()){ 
			top = newNode;
			return;
		}	
		newNode.next = top;
		top = newNode;
	}
	
	public char pop(){
		if(isEmpty()) return ' ';
		char ch = top.data;
		top = top.next;
		return ch;
	}
	
	public static void main (String[] args){
		Scanner sc = new Scanner(System.in);
		ReverseString rs = new ReverseString();
		System.out.print("Enter a String: ");
		String str = sc.nextLine();
		StringBuilder s = new StringBuilder();
		for(int i=0; i<str.length(); i++){
			rs.push(str.charAt(i));	
		}
		for(int i=0; i<str.length(); i++){
			s.append(rs.pop());
		}
		System.out.println(str + " --> " + s.toString());
	}
}