class Flower {
    String name;
    String color;
    boolean hasFragrance;

    Flower(String name, String color, boolean hasFragrance) {
        this.name = name;
        this.color = color;
        this.hasFragrance = hasFragrance;
    }

    void display() {
        System.out.println("Flower Name: " + name);
        System.out.println("Color: " + color);
        System.out.println("Has Fragrance: " + (hasFragrance ? "Yes" : "No"));
    }
}

class Rose extends Flower {
    boolean hasThorns;

    Rose(String name, String color, boolean hasFragrance, boolean hasThorns) {
        super(name, color, hasFragrance);
        this.hasThorns = hasThorns;
    }

    void display() {
        super.display();
        System.out.println("Has Thorns: " + (hasThorns ? "Yes" : "No"));
        System.out.println();
    }
}

class Lily extends Flower {
    boolean isWaterPlant;

    Lily(String name, String color, boolean hasFragrance, boolean isWaterPlant) {
        super(name, color, hasFragrance);
        this.isWaterPlant = isWaterPlant;
    }

    void display() {
        super.display();
        System.out.println("Grows in Water: " + (isWaterPlant ? "Yes" : "No"));
        System.out.println();
    }
}

public class FlowerDemo {
    public static void main(String args[]) {
        Rose r = new Rose("Rose", "Red", true, true);
        Lily l = new Lily("Lily", "White", true, true);
        
        System.out.println("---- Rose Details ----");
        r.display();
        
        System.out.println("---- Lily Details ----");
        l.display();
    }
}
