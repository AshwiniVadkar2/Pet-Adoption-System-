class Parent {
	Parent(int i) {
		System.out.println("i=" + i);
		System.out.println("I am almighty");
	}
}

class Child extends Parent {
	Child() {
		super(10);
		System.out.println("I am atomic");
	}
}

class construct3 {
	public static void main(String args[]) {
		Child n = new Child();
	}
}
