class Even {
    public static void main(String args[]) {
        System.out.print("Even numbers from 1 to 100 are: ");
        for(int i = 1; i <= 100; i++) {
            if((i & 1) == 0) {
                System.out.print(i + ",");
            }
        }
    }
}
