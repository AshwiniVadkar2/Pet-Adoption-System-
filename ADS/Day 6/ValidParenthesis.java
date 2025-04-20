public class ValidParenthesis{
	Node top;
	static class Node{
		char data;
		Node next;
		Node(char ch){
			this.data = ch;
			next = null;
		}
	}
	
	public boolean isEmpty(){
		return top==null;
	}
	
	public void push(char ch){
		Node newNode = new Node(ch);
		if(top==null){
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
	
	public static boolean isValid(String str){ 
		ValidParenthesis stack = new ValidParenthesis();
		for(int i=0; i<str.length(); i++){
			if(str.charAt(i)=='{'){
				stack.push('}');	
			} else if(str.charAt(i)=='('){
				stack.push(')');	
			} else if(str.charAt(i)=='['){
				stack.push(']');	
			} else if(stack.isEmpty() || stack.pop()!=str.charAt(i)){
				return false;
			}
		}
		return stack.isEmpty();
	}
	
	public static void main(String[] main){
		String str[] = {"{[()]}","{[(])}"};
		for(int i=0; i<str.length; i++){
			System.out.println("Are parenthesis balanced in " + str[i] + " ?: " + isValid(str[i]));
		}
	}
}