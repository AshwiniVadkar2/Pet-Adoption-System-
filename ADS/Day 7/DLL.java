public class DLL{
	Node head;
	static class Node{
		int data;
		Node next, prev;
		Node(int data){
			this.data = data;
			next = null;
			prev = null;
		}
	}
	
	void insertFirst(int x){
		Node newNode = new Node(x);
		if(head==null){
			head = newNode;
			return;
		}	
		newNode.next = head;
		head.prev = newNode;
		head = newNode;
	}
	
	void insertLast(int x){
		Node newNode = new Node(x);
		if(head==null){
			head = newNode;
			return;
		}
		Node temp = head;
		while(temp.next!=null){
			temp=temp.next;
		}
		
		newNode.next = temp.next;
		temp.next = newNode;
		newNode.prev = temp;
	}
	
	void deleteFirst(){
		if(head == null) return;
			head = head.next;
		if(head!=null){
			head.prev = null;	
		}
	}
	
	void deleteLast(){
		if(head==null) 
			return;
		if(head.next==null) 
			head = null;
		Node temp = head;
		while(temp.next!=null){
			temp=temp.next;
		}
		temp.prev.next = null;	
	}
	
	void insertAfter(int before, int x){
		Node newNode = new Node(x);
		if(head==null){
			head = newNode;
			return;
		}
		
		Node temp = head;
		while(temp.next!=null){
			if(temp.data == before){
				newNode.next = temp.next;
				newNode.prev = temp;
				temp.next = newNode;
				if(newNode.next!=null){
					newNode.next.prev = newNode;
				}
				return;
			}
			temp = temp.next;
		}
		System.out.println("Element doesn't exist");
	}
	
	void insertAtPosition(int pos, int x){
		Node newNode = new Node(x);
		if(pos<=0){
			return;	
		}
		
		if(head==null){
			head = newNode;
			return;
		}
		
		if(pos==1){
			newNode.next = head.next;
			if(newNode.next!=null){
				newNode.next.prev=newNode;	
			}
			head.next = newNode;
			newNode.prev = head;
			return;
		}
		
		Node temp = head;
		int i=1;
		while(temp.next!=null && i<pos-1){
			temp = temp.next;
			i++;
		}
		
		newNode.next = temp.next;
		if(newNode.next!=null){
			newNode.next.prev=newNode;	
		}
		temp.next = newNode;
		newNode.prev = temp;
	}
	
	void deleteAfter(int before){
		if(head==null || head.next==null) 
			return;
		
		Node temp = head;
		while(temp.next!=null){
			if(temp.data==before){
				if(temp.next==null) return;
				if(temp.next!=null)
					temp.next = temp.next.next;
				if(temp.next!=null)
					temp.next.prev = temp;	
				return;
			}
			temp = temp.next;	
		}
		System.out.println("Element doesn't exist");	
	}
	
	void deleteAtPosition(int pos){
		if(head==null || pos<=0) return;
		if(pos==1){
			head = head.next;
			if(head!=null)
				head.prev = null;
			return;
		}
		
		Node temp = head;
		int i=1;
		while(temp.next!=null && i<pos-1){
			temp=temp.next;
			i++;
		}
		
		if(temp.next!=null)
			temp.next = temp.next.next;
		if(temp.next!=null){
			temp.next.prev = temp;
		}
	}
	
	void deleteNode(int x){
		if(head==null) return;
		
		Node temp = head;
		while(temp.next!=null){
			if(temp.data==x){
				if(temp.next!=null){
					temp.next.prev = temp.prev;
				}
				if(temp.prev!=null){
					temp.prev.next = temp.next;
				}
				return;
			}
			temp = temp.next;
		}
		System.out.println("Element doesn't exist");
	}
	
	
	void display(){
		if(head==null){
			System.out.println("NULL");
			return;
		}
		Node p=null, temp=head;
		System.out.println("Forward Traversal");
		System.out.print("NULL-->");
		while(temp!=null){
			System.out.print(temp.data+"-->");
			p = temp;
			temp=temp.next;
		}
		System.out.print("NULL\n");
		
		System.out.println("Backward Traversal");
		System.out.print("NULL-->");
		while(p!=null){
			System.out.print(p.data+"-->");
			p=p.prev;
		}
		System.out.print("NULL\n");
	}

	public static void main(String[] args){
		DLL ll = new DLL();
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
		ll.deleteFirst();
		ll.display();
		ll.deleteLast();
		ll.display();
		ll.insertAfter(3,9);
		ll.display();
		ll.insertAfter(10,10);
		ll.display();
		ll.insertAtPosition(4, 10);
		ll.display();
		ll.deleteAfter(6);
		ll.display();
		ll.deleteAtPosition(3);
		ll.display();
		ll.deleteNode(10);
		ll.display();
	}
}