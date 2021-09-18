/*
Length of the longest substring without repeating character
*/

import java.io*;
import java.util.*;

class GFC {
	/* This function returns true if all characters in str [i..j]
	are distinct, otherwise returns false.
	*/
	
	public static Boolean areDistinct(String str, int i, int j){
		//Default values in visited are false
		boolean visited[] = new boolean[26];
		for(int k=i; k <= j; k++) {
			if(visited[str.charAt(k) - 'a'] == true)
				return false;
			visited[str.charAt(k) - 'a'] = true;
		}
		return true;
	}
	/*Returns lenth of the longest substring with all distinct 
	characters.
	*/
	
	public static int longestUniqueSubstr(String str) {
		int n = str.length();
		//Result
		int res = 0;
		
		for(int i=0; i<n; i++)
			for(int j=i; j<n; j++)
				res = Math.max(res, j-i+1);
		return res;
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
	}
	