class Ch4 {
    public static void main(String[] args) {
        int age=1000;
		if (age < 0 || age > 150) 
		{
            throw new IllegalArgumentException("Age must be between 0 and 150");
        }
    }
}
