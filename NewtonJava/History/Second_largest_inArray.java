/*User function Template for Java

Code to add two second largest in an array */




class Solution
{ 
    public static int print2largest(int A[],int N) 
    {
        //CODE HERE
        int max1 = 0;
        int max2 =0;
        
        for(int i =0; i<N; i++) {
           max1 = Math.max(max1, A[i]);
        }
        
        for(int i =0; i<N; i++) {
           if(A[i] != max1) {
               max2 = Math.max(max2, A[i]);
           }
        }
        
        
        return max2;
    }
    
    
}