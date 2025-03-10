class Minimum {
    public static void main(String args[]) {
        int a = 10;
        int b = 20;
        int c = 30;
        int d = 40;
        System.out.println("Numbers are: " + a + "," + b + "," + c + "," + d);
        String min = (a < b && a < c && a < d) ? a + " is Smallest number" :
                     (b < a && b < c && b < d) ? b + " is Smallest number" :
                     (c < a && c < b && c < d) ? c + " is Smallest number" :
                     d + " is Smallest number";
        System.out.println(min);
    }
}
