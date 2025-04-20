class CQueue {
    int size = 5;
    int CQ[] = new int[size];
    int rear, front;

    CQueue() {
        front = -1;
        rear = -1;
    }

    boolean isEmpty() {
        return front == -1;
    }

    boolean isFull() {
        return ((rear + 1) % size) == front;
    }

    void enqueue(int x) {
        if (isFull()) {
            System.out.println("Queue is full!");
        } else {
            if (front == -1) front = 0;
            rear = (rear + 1) % size;
            CQ[rear] = x;
            System.out.println(x + " insertion is done!");
        }
    }

    int dequeue() {
        if (isEmpty()) {
            System.out.println("Queue is empty!!!");
            return -1;
        } else {
            int x = CQ[front];
            if (front == rear) {
                front = -1;
                rear = -1;
            } else {
                front = (front + 1) % size;
            }
            System.out.println("Deleted " + x);
            return x;
        }
    }

    void display() {
        if (isEmpty()) {
            System.out.println("Queue is Empty!");
        } else {
            int i = front;
            while (true) {
                System.out.print(CQ[i] + " ");
                if (i == rear)
                    break;
                i = (i + 1) % size;
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        CQueue q1 = new CQueue();
        q1.enqueue(11);
        q1.enqueue(12);
        q1.enqueue(13);
        q1.enqueue(14);
        q1.enqueue(15);
        q1.enqueue(5);  // Should show "Queue is full"
        q1.display();
        q1.dequeue();
        q1.dequeue();
        q1.dequeue();
        q1.dequeue();
        q1.display();
        q1.dequeue();
        q1.display();
    }
}
