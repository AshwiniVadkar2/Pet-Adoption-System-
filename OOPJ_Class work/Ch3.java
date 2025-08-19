class Ch3 {
    public static void main(String[] args) {
        try {
            int a = Integer.parseInt("abcd");
        } catch (NumberFormatException e) {
            System.out.println("give numbers");
        }
    }
}
