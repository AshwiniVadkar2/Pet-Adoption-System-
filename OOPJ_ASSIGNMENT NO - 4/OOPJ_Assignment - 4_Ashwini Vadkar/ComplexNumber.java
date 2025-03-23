class ComplexNumber {
    int real;
    int img;

    ComplexNumber() {
        real = 0;
        img = 0;
    }

    ComplexNumber(int real) {
        this.real = real;
        img = 0;
    }

    ComplexNumber(int real, int img) {
        this.real = real;
        this.img = img;
    }

    ComplexNumber add(ComplexNumber other) {
        return new ComplexNumber(this.real + other.real, this.img + other.img);
    }

    public ComplexNumber multiply(ComplexNumber other) {
        int realPart = this.real * other.real - this.img * other.img;
        int imgPart = this.real * other.img + this.img * other.real;
        return new ComplexNumber(realPart, imgPart);
    }

    @Override
    public String toString() {
        return String.format("%d + %di", real, img);
    }

    public static void main(String[] args) {
        ComplexNumber num1 = new ComplexNumber(3, 2);
        ComplexNumber num2 = new ComplexNumber(4, -2);
        ComplexNumber sum = num1.add(num2);
        ComplexNumber product = num1.multiply(num2);

        System.out.println("First Complex Number: " + num1);
        System.out.println("Second Complex Number: " + num2);
        System.out.println("Sum: " + sum);
        System.out.println("Product: " + product);
    }
}
