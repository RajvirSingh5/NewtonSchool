import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
	public static void main (String[] args) {
		// your code goes here
		/*
        n,m, k
        number of boys = n
        number of toys: m
        |toySize -desired size | <= k

        */
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		int m = sc.nextInt();
		int k = sc.nextInt();
		
		System.out.println("number of boys n =" + n+ ", number of toys: m =" + m + ", k=" + k );
		
		int desiredSize [] = new int[n];
		int toySize [] = new int[m];
		
		for(int i = 0; i<n; i++) {
		    desiredSize[i] = sc.nextInt();
		}
		
		for(int i = 0; i<m; i++) {
		    toySize[i] = sc.nextInt();
		}
		
		for(int i = 0; i<n; i++) {
		    System.out.print(desiredSize[i] + " ");
		}
		
		System.out.println("");
		
		for(int i = 0; i<m; i++) {
		    	System.out.print(toySize[i] + " ");
		}
		
		int count = -1;
		Arrays.sort(desiredSize);
		Arrays.sort(toySize);
		for(int i = 0; i<n; i++) {
		   for(int j = i+1; j<m; j++) {
		       if((desiredSize[i] - toySize[j] <= k) || (toySize[j] - desiredSize[i] <= k)) {
		           count++;
		           break;
		       }
		       if((desiredSize[i] - toySize[j] <= k) && (toySize[j] - desiredSize[i] <= k)) {
		           count--;
		       }
		   }
		}
		System.out.println("");
		System.out.println("Result " + count);
                      // Your code here
	}
}
