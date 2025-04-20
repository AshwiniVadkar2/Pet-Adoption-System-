import java.util.Scanner;
public class StackLL{
	Node top;
	static class Node{
		int data;
		Node next;
		Node(int data){
			this.data = data;
			next = null;
		}
	}
	
	public static void main(String[] args){
		int res;
		Scanner sc = new Scanner(System.in);
		StackLL s = new StackLL();
		while(true){
			System.out.println("\nMENU");
			System.out.println("1. Push");
			System.out.println("2. Pop");
			System.out.println("3. Peek");
			System.out.println("4. Count");
			System.out.println("5. Check Empty");
			System.out.println("6. Clear Stack");
			System.out.println("7. Display");
			System.out.println("8. Exit");
			System.out.print("Your choice: ");
			int choice = sc.nextInt();
			switch(choice){
				default:System.out.println("\nInvalid choice");
						break;
				case 1: System.out.print("\nEnter the number to be pushed: ");
						int num = sc.nextInt();
						s.push(num);
						break;
				case 2: res = s.pop();
						System.out.println((res==-1)? "\nStack Underflow" : "\nNumber removed: " + res);
						break;
				case 3: res = s.peek();
						System.out.println((res==-1)? "\nStack is empty" : "\nNumber on top of Stack: " + res);
						break;
				case 4: System.out.println("\nNumber of elements in stack: " + s.count());
						break;
				case 5: System.out.println("\nStack is empty? " + s.isEmpty());
						break;
				case 6: s.clearStack();
						break;
				case 7: s.display();
						break;
				case 8: System.out.println("\nExiting Program!");
						sc.close();
						System.exit(0);
			}
		}	
	}
	
	public void push(int x){
		Node newNode = new Node(x);
		if(top==null){
			top = newNode;
			return;
		}
		newNode.next=top;
		top = newNode;
	}
	
	public boolean isEmpty(){
		return top==null;
	}
	
	public int pop(){
		if(isEmpty()) return -1;
		int num = top.data;
		top = top.next;
		return num;
	}
	
	public int peek(){
		return (isEmpty())? -1 : top.data;	
	}
	
	public void display(){
		if(isEmpty()) return;
		Node temp = top;
		while(temp!=null){
			System.out.print(temp.data + " ");
			temp = temp.next;	
		}
	}
	
	public int count(){
		if(isEmpty()) return 0;
		int count=0;
		Node temp = top;
		while(temp!=null){
			temp = temp.next;	
			count++;
		}
		return count;
	}
	
	public void clearStack(){
		System.out.println("Stack is cleared");
		top = null;	
	}
}