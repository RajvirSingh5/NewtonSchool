/* A simple Java program to introduce a linked list */

class LinkedList {
	Node head; //head of the list
	
	/* Linked list Node. This inner class is made static so that main() can access it */
	
	static class Node {
		int data;
		Node next;
		Node(int d) {
			data = d;
			next = null;
		}
	} //Constructor
	/*Method to create a simple linked list with 3 nodes */
	
	public static void(String [] args) {
		/* Start with empty list. */
		
		LinkedList llist = new LinkedList();
		llist.head = new Node(1);
		Node second = new Node(2);
		Node third = new Node(3);
		
		/*Three block are created but still not linked. 
		Link first node with the second node */
		
		llist.head.next = second;
		
		/*Linked third node with second */
		
		second.next = third;
	}
	
}