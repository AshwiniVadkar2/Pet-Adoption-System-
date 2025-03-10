class Largest {
    public static void main(String args[]) {
        int a = 20;
        int b = 30;
        int c = 40;
        
        String result = (a > b && a > c) ? a + " is largest" : 
                        ((b > a && b > c) ? b + " is largest" : c + " is largest");
        
        System.out.println(result);
    }
}
