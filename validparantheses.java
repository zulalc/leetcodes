//open brackets must close
//STACK
class Solution {
    public boolean isValid(String s) {
        Stack<Character> st = new Stack<>();

        for(int i=0; i<s.length(); i++){
            char ch = s.charAt(i);

            //for every opening bracket, push the closing one into the stack
            //if c is closing bracket, top of the stack must be also the closing
            if(ch =='(') st.push(')');
            else if(ch =='{') st.push('}');
            else if(ch =='[') st.push(']');

            else{ //you have a closing bracket
                if(st.isEmpty()){
                    return false;
                } else if(ch != st.pop()){
                    return false;
                }
            }

        }
      return st.isEmpty();  
    }

  public boolean isValid2(String s) {
        Stack<Character> st = new Stack<>();
        Map<Character, Character> bracketMap = Map.of(')', '(', '}', '{', ']', '[');

        for(char c: s.toCharArray()){
            if(bracketMap.containsValue(c)){ //if its opening bracket (
                st.push(c); // (
            } else if (st.isEmpty() || st.pop() != bracketMap.get(c)){ 
                //if its not in the values(so it is not opening)
                //popping should give the opening
                //get ")" => gives "("
                return false;
            } 
        }

       
      return st.isEmpty();  
    }
    
}

//Time Complexity: O(n) for string length + O(1) push&pop operation = O(n)
//Space Complexity: worst case-> its only opening brackets and we store them all=> O(n)
