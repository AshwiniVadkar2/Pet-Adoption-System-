public class LinkedList{
	Node head;
	static class Node{
		int data;
		Node next;
		Node(int data){
			this.data = data;
			next = null;
		}
	}
	
	public void insertFirst(int a){
		Node new_node = new Node(a);
		new_node.next = head;
		head = new_node;
	}
	
	public void insertAfter(Node n, int a){
		Node new_node = new Node(a);
		new_node.next = n.next;
		n.next = new_node;
	}
	
	public void insertAtPosition(int position, int a){
		Node temp = head;
		int i=1;
		while(position-1!=i){
			temp = temp.next;
			i++;
		}
		Node new_node = new Node(a);
		new_node.next = temp.next;
		temp.next = new_node;
	}
	
	public void insertLast(int a){
		Node new_node = new Node(a);
		Node temp = head;
		while(temp.next!=null){
			temp = temp.next;
		}
		temp.next = new_node;
	}
	
	public void display(){
		Node temp = head;
		while(temp!=null){
			System.out.print(temp.data + "--->");
			temp = temp.next;
		}
		System.out.println("NULL");
	}
	
	public boolean search(int a){
		if (head == null) return false;
		Node temp = head;
		while(temp!=null){
			if(temp.data==a){
				return true;
			}
			temp = temp.next;	
		}
		return false;
	}
	
	public void deleteFirst(){
		if (head == null) return;
		head  = head.next;
	}
	
	public void deleteLast(){
		if (head == null) return;
		Node temp = head;
		while(temp.next.next!=null){
			temp= temp.next;
		}
		temp.next= null;
	}
	
	public void deleteAtPosition(int position){
		if (head == null) return;
		Node temp = head;
		int i=1;
		while(position-1!=i){
			temp= temp.next;
			i++;
		}
		temp.next=temp.next.next;
	}
	
	public void deleteAfter(Node n){
		if (head == null) return;
		if(n.next!=null)
			n.next=n.next.next;
		else
			n.next=null;
	}
	
	public static void main(String[] args){
		LinkedList ll = new LinkedList();
		ll.insertFirst(1);
		ll.insertFirst(2);
		ll.insertFirst(3);
		ll.insertFirst(4);
		ll.insertFirst(5);
		ll.display();
		ll.insertLast(6);
		ll.insertLast(7);
		ll.insertLast(8);
		ll.display();
		System.out.println(ll.search(10));
		System.out.println(ll.search(5));	
		int x = 5;
		Node p = ll.head;
		while(p!=null){
			if(p.data==x){
				ll.insertAfter(p, 10);
				break;
			}
			p = p.next;
			if(p==null)
				System.out.println("Element " + x + " not found");
		}
		ll.display();
		ll.insertAtPosition(5, 14);
		ll.display();
		ll.deleteFirst();
		ll.display();
		ll.deleteLast();
		ll.display();
		ll.deleteAtPosition(5);
		ll.display();
		x = 4;
		p = ll.head;
		while(p!=null){
			if(p.data==x){
				ll.deleteAfter(p);
				break;
			}
			p = p.next;
			if(p==null)
				System.out.println("Element " + x + " not found");
		}
		ll.display();
	}
}