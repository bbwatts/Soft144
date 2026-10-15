class HashTable {
    constructor() {
    }
}

HashTable.main = function() {
    // 1. Create a Hashtable (Key: Student ID, Value: Name)
    var studentTable = new HashTable();

        // 2. Add elements using put()
        studentTable.put(101, "Alice");
        studentTable.put(102, "Bob");
        studentTable.put(103, "Charlie");
        studentTable.put(104, "Diana");

        // 3. Retrieve an element using get()
        int searchId = 102;
        String studentName = studentTable.get(searchId);
        System.out.println("Student with ID " + searchId + ": " + studentName);

        // 4. Update an entry (putting a duplicate key overwrites the old value)
        studentTable.put(103, "Charles"); 
        System.out.println("Updated ID 103: " + studentTable.get(103));

        // 5. Remove an element using remove()
        studentTable.remove(104);
        System.out.println("Contains ID 104 after removal? " + studentTable.containsKey(104));

        // 6. Iterate through the Hashtable using an enhanced for-loop
        System.out.println("\n--- Current Student List ---");
        for (Map.Entry<Integer, String> entry : studentTable.entrySet()) {
            System.out.println("ID: " + entry.getKey() + " | Name: " + entry.getValue());
        }
    }
}
