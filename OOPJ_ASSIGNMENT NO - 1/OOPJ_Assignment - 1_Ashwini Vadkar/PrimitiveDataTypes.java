class PrimitiveDataTypes {

    // Instance variables (default values will be displayed)
    byte byteValue;
    short shortValue;
    int intValue;
    long longValue;
    float floatValue;
    double doubleValue;
    char charValue;
    boolean booleanValue;

    public static void main(String args[]) {
        PrimitiveDataTypes obj = new PrimitiveDataTypes();

        // Printing default values (instance variables)
        System.out.println("Default Values:");
        System.out.println("byte: " + obj.byteValue);
        System.out.println("short: " + obj.shortValue);
        System.out.println("int: " + obj.intValue);
        System.out.println("long: " + obj.longValue);
        System.out.println("float: " + obj.floatValue);
        System.out.println("double: " + obj.doubleValue);
        System.out.println("char: '" + obj.charValue + "'");
        System.out.println("boolean: " + obj.booleanValue);

        // Assigning values
        byte byteValue = 5;
        short shortValue = 15;
        int intValue = 25;
        long longValue = 35L;
        float floatValue = 45.5f;
        double doubleValue = 55.55;
        char charValue = 'B';
        boolean booleanValue = false;

        // Printing assigned values
        System.out.println("\nAssigned Values:");
        System.out.println("byte: " + byteValue);
        System.out.println("short: " + shortValue);
        System.out.println("int: " + intValue);
        System.out.println("long: " + longValue);
        System.out.println("float: " + floatValue);
        System.out.println("double: " + doubleValue);
        System.out.println("char: " + charValue);
        System.out.println("boolean: " + booleanValue);
    }
}
