import java.util.Scanner;
public class Stack{
	public int size,top;
	public int[] stack;
	
	Stack(int size){
		top = -1;
		this.size = size;
		stack = new int[size];
	}
	
	public boolean IsEmpty(){
		return top == -1;	
	}
	
	public int count(){
		return top+1;		
	}
	
	public void push(int x){
		if(top==size-1){
			System.out.println("Stack Overflow");
			return;
		}
		stack[++top] = x;
	}
	
	public int pop(){
		return IsEmpty()? -1 : stack[top--];	
	}
	
	public int peek(){
		if(IsEmpty()) return -1;
		return stack[top];
	}
	
	public void clearStack(){
		top = -1;
		System.out.println("Stack is cleared");	
	}
	
	public void display(){
		if(IsEmpty()) return;
		for(int i=top; i>=0; i--){
			System.out.print(stack[i] + " ");
		}
		System.out.println();
	}
	
	public static void main(String[] args){
		int res;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the size of stack: ");
		int size = sc.nextInt();
		Stack s = new Stack(size);
		while(true){
			System.out.println("MENU");
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
				case 4: System.out.println("\n Number of elements in stack: " + s.count());
						break;
				case 5: System.out.println("Stack is empty? " + s.IsEmpty());
						break;
				case 6: s.clearStack();
						break;
				case 7: s.display();
						break;
				case 8: System.out.println("Exiting Program!");
						sc.close();
						System.exit(0);
			}
		}	
	}
}