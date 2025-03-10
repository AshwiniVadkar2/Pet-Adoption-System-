class Logic {
    public static void main(String args[]) {
        boolean a = true;
        boolean b = false;
        boolean c = true;
        
        boolean result = ((a && b) || (b && c) || (c && a)) ? true : false;
        
        System.out.println(result);
    }
}
