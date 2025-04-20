public class RevLL{
	Node head;
	static class Node{
		int data;
		Node next;
		Node(int data){
			this.data=data;
			next = null;
		}
	}
	
	public void append(int a){
		Node newNode = new Node(a);
		newNode.next = head;
		head = newNode;
	}
	
	public void display(){
		Node temp = head;
		while(temp!=null){
			System.out.print(temp.data + "--->");
			temp=temp.next;
		}
		System.out.println("NULL");
	}
	
	public Node reverseList(Node head){
		Node prev=null,next=null;
		Node current = head;
		while(current!=null){
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		return prev;
	}
	
	public static void main(String...args){
		RevLL ll = new RevLL();
		for(int i=1; i<=5; i++){
			ll.append(i);
		}
		ll.display();
		ll.head = ll.reverseList(ll.head);
		ll.display();
	}	
}