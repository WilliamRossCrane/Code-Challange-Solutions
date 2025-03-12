1. What are the four main principles of object-oriented programming?
    a. Encapsulation: Bundling data (attributes) and methods (functions) into one single unit called a class, hiding the internal state only displaying necessary data. 
    b. Inheritance: The ability to inherit properites and methods from a different class, promoting code reusability and establishes a heirarchy between classes. 
    c. Polymorphism: Allows objects of different classes to be treated as objects of a common superclass, allowing methods to act differently based on the object there actioning.
    d. Abstraction: Hides complex implementation details only showing necessary features of the object, simplifying the programming by showing you what it does rather than how it does it.
2. What is a class and how does it differ from an object?
    a. A class is the template that defines the properties (i.e. Car; color, model, speed), the Object is the actual instance of the class (i.e. red color, Elentra 2007, current speed 60kmph), the class is a definition or template an object is the instance of it, objects are stored in memory, Classes tell you what can be stored. 
3. Explain the concept of inheritance with a simple example.
    a. Making new boxes that inherit things from parent boxes. Like how you might inherit traits from your parents. 
4. What is method overriding and how does it differ from method overloading?
    a. Method overriding a child class creates its own version of a method that already exists in a parent class.
    (i.e, Parent class Animal and Child class Dog have the same method makeSound() but dogs version makes it bark instead)
    While overriding replaces and inherited method, overloading creates multiple versions of a method that do similar things but with different inputs.
5. What is encapsulation and why is it important?
    a. Encapsulation essentially bundles Methods and Properties within a Class, this protects data from accidental modification, make modifications easier, and primarily it hides user data so they can only see what the need to.
    For instance a BankAccount class may hide your balence internally only allowing changes through deposit() and withdraw() methods.
6. Explain the difference between "is-a" and "has-a" relationships in OOP.
    a. Is-A: Represents that one thing is type of another thing, implemented using inheritence (Difference uses Inheritence)
       Has-A: That one thing has another thing as a part or property, implemented using object references (Differnece uses Composition)
7. What is polymorphism and how can it be implemented?
    a. Polymorphism is when objects of different classes can respond to the same method in there own unique way
            class Animal {
                void makeSound() {system.out.printin("???");}
            }

            class Dog extends Animal {
                void makeSound() {system.out.printin("Woof");}
            }

            class Cat extends Animal {
                void makeSound() {system.out.printin("Meow");}
            }
8. What is an abstract class and how does it differ from an interface?
9. What are access modifiers and why are they used?
10. Explain the concept of constructor overloading.
11. What is the purpose of the "super" keyword?
12. What is the difference between shallow copy and deep copy?
13. What is a static method and when should you use one?
14. Explain the concept of composition in OOP.
15. What are design patterns and why are they important in OOP?