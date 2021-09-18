/*
ArrayList provides us with dynamic arrays in Java.
The size of an ArrayList is increased automatically if the 
collection grows or shrinks if the objects are removed from the collection. 
Java ArrayList allows us to randomly access the list. 
ArrayList can not be used for primitive types, like int, char, etc. 
We will need a wrapper class for such cases.
*/
import java.io.*;
import java.util.*;

class Main{
	public static void main(Strings [] args) {
		/* Declaring the ArrayList with initial size n */
		ArrayList<Integer> al = new ArrayList<Integer>();
		
		/*Appending new elements at the end of list */
		for(int i=0; i<=5; i++) {
			al.add(i);
		}
		
		System.out.println(al);
		
		/Remove element at index 3
		al.remove(3);
		
		/* Displaying the ArrayList after deletion */
		System.out.prinln(al);
		
		for(int i =0; i<al.size(); i++){
			System.out.print(al.get(i) + " ");
		}
	}
	
}