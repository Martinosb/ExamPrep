const quizData = [
    // Topic: Fundamentals of Assembly Language
    {
        topic: "Fundamentals",
        question: "What is the fundamental purpose of assembly language?",
        options: [
            "To write operating systems.",
            "To provide a more human-readable representation of machine language.",
            "To create web applications.",
            "To manage databases."
        ],
        correct: "To provide a more human-readable representation of machine language.",
        explanation: "Assembly language uses mnemonics to represent machine-level instructions, making it easier for humans to read, write, and understand low-level code compared to raw binary.",
        feedback: {
            correct: "Excellent! You've grasped the core purpose of assembly language.",
            incorrect: "Not quite. Remember, assembly language is a bridge between human-readable code and machine code."
        }
    },
    {
        topic: "Fundamentals",
        question: "Which type of language is executed directly by the computer's hardware?",
        options: [
            "High-level language",
            "Assembly language",
            "Machine language",
            "Scripting language"
        ],
        correct: "Machine language",
        explanation: "Machine language is the native, binary code that a CPU can execute directly without any need for translation or interpretation.",
        feedback: {
            correct: "Correct! You're right on the money. The CPU speaks machine language.",
            incorrect: "Close, but not exactly. While assembly is low-level, it still needs to be assembled into machine language first."
        }
    },
    {
        topic: "Fundamentals",
        question: "What is the role of an assembler?",
        options: [
            "To compile a high-level language into assembly.",
            "To link multiple source files together.",
            "To convert assembly language mnemonics into machine code.",
            "To execute the program."
        ],
        correct: "To convert assembly language mnemonics into machine code.",
        explanation: "The assembler is a utility that translates the symbolic instructions of assembly language into the binary opcodes and operands of machine language.",
        feedback: {
            correct: "Perfect! You've nailed the function of an assembler.",
            incorrect: "That's the role of a different tool. The assembler's job is specific to translating assembly to machine code."
        }
    },
    {
        topic: "Fundamentals",
        question: "What is a primary disadvantage of writing in assembly language compared to a high-level language?",
        options: [
            "It is less powerful.",
            "It has poor performance.",
            "It is not portable between different computer architectures.",
            "It cannot access hardware directly."
        ],
        correct: "It is not portable between different computer architectures.",
        explanation: "Assembly language is specific to a particular CPU architecture. Code written for an x86 processor will not run on an ARM processor without being completely rewritten.",
        feedback: {
            correct: "Exactly! Portability is a major challenge for assembly language.",
            incorrect: "Think about the key differences. Assembly is actually very powerful and performant, but it has a significant drawback."
        }
    },
    {
        topic: "Fundamentals",
        question: "An instruction in machine language is primarily composed of which two parts?",
        options: [
            "A variable and a constant",
            "An opcode and one or more operands",
            "A function and a parameter",
            "A label and a directive"
        ],
        correct: "An opcode and one or more operands",
        explanation: "The opcode (operation code) specifies the action to perform (e.g., add, move), and the operands specify the data or locations to be used for that action.",
        feedback: {
            correct: "Great job! You know the basic structure of an instruction.",
            incorrect: "Every instruction needs to know what to do and what to do it with. What are those parts called?"
        }
    },
    {
        topic: "Fundamentals",
        question: "What is one of the main advantages of assembly language over high-level languages?",
        options: [
            "Easier to learn",
            "Better memory management",
            "Direct hardware control",
            "Platform independence"
        ],
        correct: "Direct hardware control",
        explanation: "Assembly language provides direct access to hardware features and allows precise control over CPU operations that high-level languages often abstract away.",
        feedback: {
            correct: "Absolutely right! Assembly gives you that low-level control.",
            incorrect: "Think about what makes assembly unique - it's all about getting close to the hardware."
        }
    },
    {
        topic: "Fundamentals",
        question: "What format does machine language use to represent instructions?",
        options: [
            "Decimal numbers",
            "Hexadecimal numbers",
            "Binary (1s and 0s)",
            "ASCII characters"
        ],
        correct: "Binary (1s and 0s)",
        explanation: "Machine language instructions are represented as binary digits (bits) - sequences of 1s and 0s that can be directly processed by the computer's electronic circuitry.",
        feedback: {
            correct: "That's right! At the lowest level, it's all just binary.",
            incorrect: "Remember that computers ultimately work with electricity - on/off states that correspond to binary digits."
        }
    },
    {
        topic: "Fundamentals",
        question: "What is a mnemonic in assembly language?",
        options: [
            "A memory allocation technique",
            "A shorthand representation of a machine instruction",
            "A type of comment",
            "A debugging tool"
        ],
        correct: "A shorthand representation of a machine instruction",
        explanation: "Mnemonics are short, human-readable codes (like MOV, ADD, JMP) that represent machine language instructions, making assembly code easier to write and understand.",
        feedback: {
            correct: "Perfect! Mnemonics make assembly coding possible for humans.",
            incorrect: "Mnemonics are the core of what makes assembly language human-readable."
        }
    },
    {
        topic: "Fundamentals",
        question: "What does a linker do in the assembly process?",
        options: [
            "Checks code for syntax errors",
            "Combines multiple object files into an executable",
            "Translates assembly code to machine code",
            "Optimizes code for faster execution"
        ],
        correct: "Combines multiple object files into an executable",
        explanation: "The linker takes one or more object files produced by the assembler and combines them with necessary libraries to create a complete executable program.",
        feedback: {
            correct: "Great! The linker is what brings everything together.",
            incorrect: "The linker's job comes after assembly, when separate object files need to be combined."
        }
    },
    {
        topic: "Fundamentals",
        question: "Which statement about assembly language is TRUE?",
        options: [
            "It is completely machine-independent",
            "It uses natural language statements",
            "It has a one-to-one correspondence with machine language",
            "It requires no translation to run on a computer"
        ],
        correct: "It has a one-to-one correspondence with machine language",
        explanation: "Each assembly language instruction typically corresponds to exactly one machine language instruction, unlike high-level languages where one statement may translate to many machine instructions.",
        feedback: {
            correct: "Correct! This one-to-one relationship is a defining characteristic of assembly language.",
            incorrect: "Assembly language has a direct relationship with the underlying machine code."
        }
    },
    {
        topic: "Fundamentals",
        question: "What type of translation does an assembler perform?",
        options: [
            "Dynamic translation at runtime",
            "Just-in-time compilation",
            "Static, one-pass translation",
            "Interpretation line by line"
        ],
        correct: "Static, one-pass translation",
        explanation: "Most assemblers perform a single-pass, static translation of assembly language into machine code before the program runs, rather than translating during execution.",
        feedback: {
            correct: "That's right! Assemblers typically work in a single pass before execution.",
            incorrect: "Assembly language translation happens ahead of execution, not during runtime."
        }
    },
    {
        topic: "Fundamentals",
        question: "What is a label in assembly language used for?",
        options: [
            "To name data variables",
            "To identify specific memory locations in the code",
            "To create comments",
            "To declare external functions"
        ],
        correct: "To identify specific memory locations in the code",
        explanation: "Labels are symbolic names assigned to memory addresses, making it easier to reference specific locations in the code, especially for jumps and loops.",
        feedback: {
            correct: "Exactly right! Labels are like signposts in your code.",
            incorrect: "Think about how we reference locations in code without using raw addresses."
        }
    },
    {
        topic: "Fundamentals",
        question: "Which generation of programming languages does assembly language belong to?",
        options: [
            "First generation",
            "Second generation",
            "Third generation",
            "Fourth generation"
        ],
        correct: "Second generation",
        explanation: "Assembly languages are considered second-generation languages, sitting between first-generation machine code and third-generation high-level languages like C or FORTRAN.",
        feedback: {
            correct: "Correct! Assembly language is indeed a second-generation language.",
            incorrect: "Programming languages are categorized by generations based on their abstraction level."
        }
    },
    {
        topic: "Fundamentals",
        question: "What is the term for the process of inserting additional operations into assembly code to optimize performance?",
        options: [
            "Refactoring",
            "Scheduling",
            "Pipeline optimization",
            "Instruction reordering"
        ],
        correct: "Instruction reordering",
        explanation: "Instruction reordering involves changing the sequence of instructions to improve CPU pipeline efficiency while maintaining the same program logic.",
        feedback: {
            correct: "You got it! Instruction reordering is a key optimization technique.",
            incorrect: "This optimization technique focuses specifically on changing instruction sequence."
        }
    },
    {
        topic: "Fundamentals",
        question: "Which feature is typically NOT provided by an assembler?",
        options: [
            "Symbol table management",
            "Error reporting",
            "Runtime garbage collection",
            "Address resolution"
        ],
        correct: "Runtime garbage collection",
        explanation: "Runtime garbage collection is a feature of high-level language environments. Assemblers perform static translation and don't provide memory management services during program execution.",
        feedback: {
            correct: "Correct! Garbage collection is for high-level languages, not assembly.",
            incorrect: "Assemblers are compile-time tools that don't provide runtime services."
        }
    },
    {
        topic: "Fundamentals",
        question: "What kind of language is assembly considered?",
        options: [
            "Procedural language",
            "Object-oriented language",
            "Low-level language",
            "Declarative language"
        ],
        correct: "Low-level language",
        explanation: "Assembly is classified as a low-level language because it works close to the hardware with minimal abstraction and has a strong correspondence to machine code.",
        feedback: {
            correct: "Right! Assembly is the classic example of a low-level language.",
            incorrect: "Consider how close assembly is to the actual hardware operations."
        }
    },
    {
        topic: "Fundamentals",
        question: "What is a primary reason programmers might choose to write code in assembly language today?",
        options: [
            "To ensure platform independence",
            "For maximum performance in critical sections",
            "To simplify debugging",
            "For better memory safety"
        ],
        correct: "For maximum performance in critical sections",
        explanation: "Assembly is still used for performance-critical sections of code where direct hardware control and maximum optimization are required.",
        feedback: {
            correct: "Absolutely! Performance optimization is the main reason to use assembly today.",
            incorrect: "Most developers use assembly only when they need absolute control over performance."
        }
    },
    {
        topic: "Fundamentals",
        question: "What does a cross-assembler do?",
        options: [
            "Translates between different assembly languages",
            "Assembles code on one platform for execution on a different platform",
            "Optimizes code across different functions",
            "Assembles multiple source files simultaneously"
        ],
        correct: "Assembles code on one platform for execution on a different platform",
        explanation: "A cross-assembler runs on one computer system but generates machine code for a different target system or architecture.",
        feedback: {
            correct: "That's right! Cross-assemblers are essential for embedded systems development.",
            incorrect: "Cross-assemblers are about the target platform, not the source language."
        }
    },
    {
        topic: "Fundamentals",
        question: "Which of these is NOT commonly stored in the symbol table created by an assembler?",
        options: [
            "Label names",
            "Memory addresses",
            "Source code comments",
            "Variable names"
        ],
        correct: "Source code comments",
        explanation: "Comments are ignored during assembly and not stored in the symbol table. The symbol table primarily maps symbolic names (labels, variables) to their corresponding memory addresses.",
        feedback: {
            correct: "Exactly! Comments are discarded during assembly and don't appear in the symbol table.",
            incorrect: "The symbol table contains information needed to resolve addresses, not program documentation."
        }
    },
    {
        topic: "Fundamentals",
        question: "What is the purpose of assembly language directives?",
        options: [
            "To generate machine code instructions",
            "To provide instructions to the assembler rather than the CPU",
            "To control input/output operations",
            "To optimize code execution"
        ],
        correct: "To provide instructions to the assembler rather than the CPU",
        explanation: "Directives (like .data, .text, db) are commands for the assembler itself. They control how the assembler processes the code but don't generate executable instructions.",
        feedback: {
            correct: "Perfect! Directives are messages to the assembler, not the processor.",
            incorrect: "Unlike instructions, directives don't become part of the executable code."
        }
    },
    {
        topic: "Fundamentals",
        question: "What is a macro in assembly language?",
        options: [
            "A specialized CPU instruction",
            "A way to define custom instructions that expand into multiple instructions",
            "A type of memory addressing",
            "A built-in debugging feature"
        ],
        correct: "A way to define custom instructions that expand into multiple instructions",
        explanation: "Macros are user-defined symbols that represent a sequence of instructions. When the assembler encounters a macro, it replaces it with the defined sequence.",
        feedback: {
            correct: "Excellent! Macros help reduce code duplication through text substitution.",
            incorrect: "Macros are a programmer-defined shorthand that gets expanded during assembly."
        }
    },
    {
        topic: "Fundamentals",
        question: "Which of these is a key difference between machine code and assembly language?",
        options: [
            "Machine code uses binary while assembly uses hexadecimal only",
            "Assembly uses symbolic names while machine code uses pure numeric codes",
            "Machine code is faster than assembly code",
            "Assembly code doesn't require translation"
        ],
        correct: "Assembly uses symbolic names while machine code uses pure numeric codes",
        explanation: "The primary difference is that assembly language uses human-readable symbols, labels, and mnemonics, while machine code consists entirely of numeric binary codes.",
        feedback: {
            correct: "Right! The use of symbols and mnemonics is what makes assembly human-readable.",
            incorrect: "The fundamental difference is in how instructions are represented - symbols vs. raw numbers."
        }
    },
    {
        topic: "Fundamentals",
        question: "What is meant by 'native code'?",
        options: [
            "Code written in a country's primary language",
            "Machine code that runs directly on a specific hardware architecture",
            "Code that doesn't use external libraries",
            "Open-source code with no licensing restrictions"
        ],
        correct: "Machine code that runs directly on a specific hardware architecture",
        explanation: "Native code refers to machine code compiled specifically for direct execution on a particular processor architecture without requiring any intermediate translation.",
        feedback: {
            correct: "Correct! Native code runs directly on the target hardware.",
            incorrect: "Native refers to code that's 'native' to the specific hardware it runs on."
        }
    },
    {
        topic: "Fundamentals",
        question: "What type of statements can appear in an assembly language program?",
        options: [
            "Only instructions",
            "Only directives",
            "Instructions, directives, and comments",
            "Only instructions and variables"
        ],
        correct: "Instructions, directives, and comments",
        explanation: "Assembly programs can contain machine instructions (translated to machine code), assembler directives (commands to the assembler), and comments (ignored during assembly).",
        feedback: {
            correct: "Perfect! All three types of statements are found in assembly programs.",
            incorrect: "Assembly programs contain multiple types of statements that serve different purposes."
        }
    },
    {
        topic: "Fundamentals",
        question: "What happens during the first pass of a two-pass assembler?",
        options: [
            "The machine code is generated",
            "Syntax errors are detected",
            "Labels are collected and a symbol table is built",
            "Code optimization is performed"
        ],
        correct: "Labels are collected and a symbol table is built",
        explanation: "During the first pass, the assembler scans the entire program to identify all labels and their addresses, building a symbol table without generating code.",
        feedback: {
            correct: "That's right! The first pass is about building the symbol table.",
            incorrect: "In a two-pass assembler, the first pass focuses on identifying symbols and their locations."
        }
    },
    {
        topic: "Fundamentals",
        question: "Which feature helps compensate for the lack of structured programming constructs in assembly language?",
        options: [
            "Built-in error checking",
            "Automatic memory management",
            "Macros and procedures",
            "Type checking"
        ],
        correct: "Macros and procedures",
        explanation: "Macros and procedures allow assembly programmers to create reusable code blocks and implement structured programming concepts, compensating for the lack of built-in control structures.",
        feedback: {
            correct: "Correct! Macros and procedures bring structure to assembly code.",
            incorrect: "Assembly lacks high-level constructs, but these features help bridge the gap."
        }
    },
    {
        topic: "Fundamentals",
        question: "What does the term 'relocatable code' mean in assembly programming?",
        options: [
            "Code that can be moved to different memory locations without modification",
            "Code that works on mobile devices",
            "Code that can be transferred between different computers",
            "Code that modifies its own instructions"
        ],
        correct: "Code that can be moved to different memory locations without modification",
        explanation: "Relocatable code is designed to run correctly regardless of where it's loaded in memory, with all internal references adjusted automatically during loading.",
        feedback: {
            correct: "Exactly! Relocatable code works regardless of its absolute memory position.",
            incorrect: "Relocatable refers to the ability to load and run code at different memory addresses."
        }
    },
    {
        topic: "Fundamentals",
        question: "Why is understanding assembly language beneficial even for high-level language programmers?",
        options: [
            "It's required for web development",
            "It provides insight into how programs execute at the hardware level",
            "All C programs must include assembly sections",
            "It's faster to write programs in assembly"
        ],
        correct: "It provides insight into how programs execute at the hardware level",
        explanation: "Understanding assembly gives programmers deeper insight into program execution, memory usage, and performance considerations, which helps write better high-level code.",
        feedback: {
            correct: "Absolutely right! Assembly knowledge improves overall programming skills.",
            incorrect: "While not always required, assembly knowledge gives valuable perspective on how computers actually work."
        }
    },
    {
        topic: "Fundamentals",
        question: "What is meant by 'assembly time' in programming?",
        options: [
            "The time it takes to write assembly code",
            "The duration of program execution",
            "The period when the assembler translates code into machine language",
            "A special CPU mode for assembling instructions"
        ],
        correct: "The period when the assembler translates code into machine language",
        explanation: "'Assembly time' refers to the phase when the assembler processes the source code to generate object code, as opposed to compile-time or runtime in high-level languages.",
        feedback: {
            correct: "Perfect! Assembly time is when the assembler does its work.",
            incorrect: "The term refers specifically to when the assembler processes your code."
        }
    },
    {
        topic: "Fundamentals",
        question: "What is the main reason assembly language uses hexadecimal representation?",
        options: [
            "It's easier to type than binary",
            "Processors internally use hexadecimal",
            "Binary would take too much memory",
            "It's more compact than binary while preserving the bit-pattern relationship"
        ],
        correct: "It's more compact than binary while preserving the bit-pattern relationship",
        explanation: "Hexadecimal provides a more compact and readable representation than binary while maintaining a clear relationship to the underlying binary bit patterns (each hex digit represents exactly 4 bits).",
        feedback: {
            correct: "Exactly! Hexadecimal strikes the perfect balance between readability and binary correspondence.",
            incorrect: "Hexadecimal offers a practical compromise between human readability and binary representation."
        }
    },
    {
        topic: "Fundamentals",
        question: "Which of these terms describes the output of an assembler?",
        options: [
            "Executable file",
            "Object code",
            "Source code",
            "Bytecode"
        ],
        correct: "Object code",
        explanation: "An assembler produces object code, which contains machine code instructions and data but may require linking with other object files before becoming a complete executable program.",
        feedback: {
            correct: "That's right! Object code is the direct output of the assembler.",
            incorrect: "The assembler's output is an intermediate form that typically needs further processing."
        }
    },
    {
        topic: "Fundamentals",
        question: "In assembly language programming, what does the term 'addressing mode' refer to?",
        options: [
            "Different types of memory available",
            "Methods for specifying the location of an operand",
            "Ways to organize code in memory",
            "Techniques for accessing I/O devices"
        ],
        correct: "Methods for specifying the location of an operand",
        explanation: "Addressing modes are different ways to specify where the data for an instruction is located, such as immediate values, registers, direct memory references, or indirect addressing.",
        feedback: {
            correct: "Perfect! Addressing modes determine how operands are accessed.",
            incorrect: "Addressing modes specify how the CPU locates the data needed for an instruction."
        }
    },

    // Topic: Computer Architecture
    {
        topic: "Architecture",
        question: "The CPU is primarily composed of which two components?",
        options: [
            "The ALU and the hard drive",
            "The Datapath and the Control Unit",
            "RAM and ROM",
            "The cache and the system bus"
        ],
        correct: "The Datapath and the Control Unit",
        explanation: "The Datapath contains the arithmetic/logic unit (ALU) and registers, while the Control Unit directs the flow of operations, fetching and executing instructions.",
        feedback: {
            correct: "Spot on! You understand the core components of a CPU.",
            incorrect: "Think about what makes the CPU 'central'. It needs to compute and it needs to manage operations."
        }
    },
    {
        topic: "Architecture",
        question: "What does the width of the address bus determine?",
        options: [
            "The speed of data transfer",
            "The number of CPU cores",
            "The maximum amount of memory the CPU can address",
            "The size of the instruction set"
        ],
        correct: "The maximum amount of memory the CPU can address",
        explanation: "The number of bits in the address bus dictates the physical address space. An N-bit bus can address 2^N unique memory locations.",
        feedback: {
            correct: "Precisely! The address bus is the key to memory size.",
            incorrect: "Consider what an 'address' is for. It's for locating something. What does the CPU need to locate in memory?"
        }
    },
    {
        topic: "Architecture",
        question: "What is the main advantage of SRAM over DRAM?",
        options: [
            "It is less expensive.",
            "It has a higher storage density.",
            "It is faster.",
            "It is non-volatile."
        ],
        correct: "It is faster.",
        explanation: "SRAM (Static RAM) is significantly faster than DRAM (Dynamic RAM) because it doesn't require refreshing. This speed makes it ideal for CPU caches.",
        feedback: {
            correct: "You got it! Speed is the name of the game for SRAM.",
            incorrect: "SRAM and DRAM have a key trade-off between speed, cost, and density. What is SRAM's main selling point?"
        }
    },
    {
        topic: "Architecture",
        question: "What is the primary function of cache memory?",
        options: [
            "To provide long-term, permanent storage.",
            "To store the operating system kernel.",
            "To act as a high-speed buffer between the CPU and main memory.",
            "To manage peripheral devices."
        ],
        correct: "To act as a high-speed buffer between the CPU and main memory.",
        explanation: "Cache memory stores frequently accessed data and instructions, bridging the speed gap between the very fast CPU and the slower main memory (DRAM).",
        feedback: {
            correct: "Absolutely right! Cache is all about speeding up memory access.",
            incorrect: "Think about the memory hierarchy. Why do we need a layer between the super-fast CPU registers and the slower RAM?"
        }
    },
    {
        topic: "Architecture",
        question: "In the memory hierarchy, which type of memory is the fastest for the CPU to access?",
        options: [
            "Main Memory (DRAM)",
            "L2 Cache",
            "Registers",
            "Solid State Drive (SSD)"
        ],
        correct: "Registers",
        explanation: "Registers are located directly inside the CPU, so they offer the fastest possible access times, holding the data the CPU is currently working on.",
        feedback: {
            correct: "Yes! Nothing is faster than the registers inside the CPU.",
            incorrect: "The closer the memory is to the CPU's core, the faster it is. Which memory is physically inside the CPU?"
        }
    },

    // Topic: IA-32 Registers
    {
        topic: "IA-32 Registers",
        question: "In the IA-32 architecture, which register is known as the 'accumulator' and is used for arithmetic and I/O operations?",
        options: ["EBX", "ECX", "EDX", "EAX"],
        correct: "EAX",
        explanation: "The EAX register is the primary accumulator. It's implicitly used in many arithmetic (especially multiplication/division) and I/O instructions.",
        feedback: {
            correct: "That's the one! EAX is the workhorse for calculations.",
            incorrect: "While all are general-purpose registers, one has a special role as the primary accumulator."
        }
    },
    {
        topic: "IA-32 Registers",
        question: "What is the primary purpose of the EIP (Extended Instruction Pointer) register?",
        options: [
            "To store the result of the last calculation.",
            "To point to the current top of the stack.",
            "To hold the memory address of the next instruction to be executed.",
            "To count the number of instructions executed."
        ],
        correct: "To hold the memory address of the next instruction to be executed.",
        explanation: "The EIP register, in combination with the CS (Code Segment) register, always points to the next instruction that the CPU will fetch from memory.",
        feedback: {
            correct: "Correct! The EIP tells the CPU where to go next.",
            incorrect: "Think about the flow of a program. Something must keep track of which instruction comes next."
        }
    },
    {
        topic: "IA-32 Registers",
        question: "Which register is typically used as a counter for loops?",
        options: ["EAX", "EBX", "ECX", "EDX"],
        correct: "ECX",
        explanation: "The ECX register is designated as the 'Count' register. The `LOOP` instruction specifically uses ECX to control the number of iterations.",
        feedback: {
            correct: "You've got it! 'C' is for 'Count'.",
            incorrect: "Each general-purpose register has a conventional role. Which one is designated for counting?"
        }
    },
    {
        topic: "IA-32 Registers",
        question: "The ESP (Extended Stack Pointer) register is used for what purpose?",
        options: [
            "Pointing to the base of the data segment.",
            "Pointing to the current top of the stack.",
            "Storing extra data.",
            "Indexing source data for string operations."
        ],
        correct: "Pointing to the current top of thestack.",
        explanation: "The ESP register always holds the address of the last item pushed onto the stack. It is modified by instructions like `PUSH`, `POP`, `CALL`, and `RET`.",
        feedback: {
            correct: "Perfect! ESP is the key to managing the stack.",
            incorrect: "The name gives a clue! 'SP' stands for Stack Pointer. What does it point to?"
        }
    },
    {
        topic: "IA-32 Registers",
        question: "Which register pair provides the full logical address of the next instruction to be executed?",
        options: ["DS:ESI", "SS:ESP", "CS:EIP", "ES:EDI"],
        correct: "CS:EIP",
        explanation: "The logical address of an instruction is formed by combining the segment address from the Code Segment (CS) register with the offset from the Extended Instruction Pointer (EIP).",
        feedback: {
            correct: "Absolutely right! CS and EIP work together to find the next instruction.",
            incorrect: "An instruction lives in the 'Code Segment'. Which pointer keeps track of the current instruction?"
        }
    },

    // Topic: Status and Control Flags
    {
        topic: "Flags",
        question: "Which flag is set when the result of a signed arithmetic operation is too large to fit in the destination operand?",
        options: ["CF (Carry Flag)", "ZF (Zero Flag)", "SF (Sign Flag)", "OF (Overflow Flag)"],
        correct: "OF (Overflow Flag)",
        explanation: "The Overflow Flag (OF) is specifically for signed arithmetic. It indicates that the positive or negative result is outside the valid range for the destination's size.",
        feedback: {
            correct: "Correct! OF is crucial for detecting signed arithmetic errors.",
            incorrect: "This is a tricky one. While Carry Flag is for unsigned overflow, a different flag handles signed overflow."
        }
    },
    {
        topic: "Flags",
        question: "What does the ZF (Zero Flag) indicate?",
        options: [
            "The result of an operation is a negative number.",
            "The result of an operation is zero.",
            "An operation produced a carry.",
            "The parity of the result is odd."
        ],
        correct: "The result of an operation is zero.",
        explanation: "The Zero Flag (ZF) is set to 1 if the result of an arithmetic or logical operation is zero. It is essential for comparison and loop instructions.",
        feedback: {
            correct: "Yes! ZF=1 means the result was zero.",
            incorrect: "The name is a direct clue. What would the 'Zero' flag tell you about the result?"
        }
    },
    {
        topic: "Flags",
        question: "The `CMP` instruction is used to compare two operands. How does it primarily signal their relationship?",
        options: [
            "By storing the result in the EAX register.",
            "By setting the status flags (ZF, SF, CF, OF).",
            "By returning a boolean value.",
            "By printing the result to the console."
        ],
        correct: "By setting the status flags (ZF, SF, CF, OF).",
        explanation: "`CMP` performs a subtraction but discards the result. Its only purpose is to set the status flags to reflect the relationship between the operands (e.g., equal, greater than, less than).",
        feedback: {
            correct: "Exactly! `CMP` works by setting the stage for conditional jumps.",
            incorrect: "`CMP` doesn't change any registers or memory. It only affects a special set of bits. What are they called?"
        }
    },
    {
        topic: "Flags",
        question: "Which flag controls the direction of string processing instructions like `MOVSB` and `SCASB`?",
        options: ["PF (Parity Flag)", "AF (Auxiliary Carry Flag)", "DF (Direction Flag)", "IF (Interrupt Enable Flag)"],
        correct: "DF (Direction Flag)",
        explanation: "The Direction Flag (DF) determines whether string operations increment (DF=0, forward) or decrement (DF=1, backward) the index registers (ESI, EDI).",
        feedback: {
            correct: "You're heading in the right direction! DF is correct.",
            incorrect: "Think about what needs to be controlled for a string operation. It's the 'direction' of processing."
        }
    },
    {
        topic: "Flags",
        question: "The SF (Sign Flag) is set to 1 when...",
        options: [
            "The result of an operation is negative.",
            "The result is positive.",
            "The operation is a subtraction.",
            "The source operand is negative."
        ],
        correct: "The result of an operation is negative.",
        explanation: "The Sign Flag (SF) is a direct copy of the most significant bit (MSB) of the result. In signed number representation, an MSB of 1 indicates a negative value.",
        feedback: {
            correct: "That's it! SF reflects the sign bit of the result.",
            incorrect: "The 'Sign' flag tells you about the sign of the...?"
        }
    },

    // ... (More topics and questions will be added here)
];

const quizArea = document.getElementById('quiz-area');
const resultArea = document.getElementById('result-area');
const questionCounter = document.getElementById('question-counter');
const scoreCounter = document.getElementById('score-counter');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const explanationContainer = document.getElementById('explanation-container');
const explanationBox = document.getElementById('explanation-box');
const explanationText = document.getElementById('explanation-text');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const finalScore = document.getElementById('final-score');
const topicTitle = document.getElementById('topic-title');

// New page elements
const landingPage = document.getElementById('landing-page');
const topicSelection = document.getElementById('topic-selection');
const quizPage = document.getElementById('quiz-page');
const startQuizBtn = document.getElementById('start-quiz-btn');
const backToHomeBtn = document.getElementById('back-to-home');
const topicBtns = document.querySelectorAll('.topic-btn');

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuizData = [];
let selectedTopic = 'all';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function filterQuestionsByTopic(topic) {
    if (topic === 'all') {
        return quizData;
    }
    return quizData.filter(question => question.topic === topic);
}

function showTopicSelection() {
    landingPage.classList.add('hidden');
    topicSelection.classList.remove('hidden');
    quizPage.classList.add('hidden');
}

function showLandingPage() {
    landingPage.classList.remove('hidden');
    topicSelection.classList.add('hidden');
    quizPage.classList.add('hidden');
}

function startQuiz(topic = 'all') {
    selectedTopic = topic;
    currentQuestionIndex = 0;
    score = 0;
    
    const filteredQuestions = filterQuestionsByTopic(topic);
    shuffledQuizData = [...filteredQuestions];
    shuffleArray(shuffledQuizData);
    
    landingPage.classList.add('hidden');
    topicSelection.classList.add('hidden');
    quizPage.classList.remove('hidden');
    quizArea.classList.remove('hidden');
    resultArea.classList.add('hidden');
    nextBtn.classList.add('hidden');
    
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = shuffledQuizData[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    topicTitle.innerText = `Topic: ${currentQuestion.topic}`;
    questionCounter.innerText = `Question ${currentQuestionIndex + 1} / ${shuffledQuizData.length}`;
    scoreCounter.innerText = `Score: ${score}`;

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn', 'w-full', 'p-4', 'text-left', 'bg-white', 'border', 'border-gray-300', 'rounded-lg', 'hover:bg-gray-50');
        button.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
    explanationContainer.classList.add('hidden');
    nextBtn.classList.add('hidden');
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const currentQuestion = shuffledQuizData[currentQuestionIndex];
    const correct = selectedBtn.innerText === currentQuestion.correct;

    let feedbackMessage;

    if (correct) {
        score++;
        selectedBtn.classList.add('correct');
        selectedBtn.style.animation = 'correct-answer 0.6s ease-out, pulse-success 1.5s infinite';
        explanationBox.className = 'p-4 rounded-lg explanation border-green-500 bg-green-50';
        explanationBox.style.animation = 'fade-in 0.5s ease-out';
        feedbackMessage = currentQuestion.feedback.correct;
    } else {
        selectedBtn.classList.add('incorrect');
        selectedBtn.style.animation = 'incorrect-answer 0.6s ease-out, pulse-error 1.5s infinite';
        explanationBox.className = 'p-4 rounded-lg explanation border-red-500 bg-red-50';
        explanationBox.style.animation = 'fade-in 0.5s ease-out';
        feedbackMessage = currentQuestion.feedback.incorrect;
    }
    
    explanationText.innerHTML = `<strong>${feedbackMessage}</strong><br>${currentQuestion.explanation}`;
    explanationContainer.classList.remove('hidden');

    Array.from(optionsContainer.children).forEach(button => {
        if (button.innerText === currentQuestion.correct) {
            if(!correct) button.classList.add('correct');
        }
        button.disabled = true;
    });

    if (shuffledQuizData.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hidden');
    } else {
        setTimeout(showResult, 2000);
    }
}

function showResult() {
    quizArea.classList.add('hidden');
    resultArea.classList.remove('hidden');
    const percentage = Math.round((score / shuffledQuizData.length) * 100);
    let resultHTML = `
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
        <p class="text-xl text-gray-600 mb-2">Your final score is ${score} out of ${shuffledQuizData.length}.</p>
        <p class="text-3xl font-bold mb-6">
    `;
    if (percentage >= 80) {
        resultHTML += `<span class="text-green-500">${percentage}% - Outstanding!</span>`;
    } else if (percentage >= 60) {
        resultHTML += `<span class="text-blue-500">${percentage}% - Great Effort!</span>`;
    } else if (percentage >= 40) {
        resultHTML += `<span class="text-yellow-500">${percentage}% - Good Try, Keep Studying!</span>`;
    } else {
        resultHTML += `<span class="text-red-500">${percentage}% - Don't Give Up, Review and Try Again!</span>`;
    }
    resultHTML += `</p>`;
    finalScore.innerHTML = resultHTML;
}

// Event Listeners
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

restartBtn.addEventListener('click', () => {
    startQuiz(selectedTopic);
});

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', showLandingPage);

startQuizBtn.addEventListener('click', showTopicSelection);

backToHomeBtn.addEventListener('click', showLandingPage);

topicBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const topic = e.target.getAttribute('data-topic');
        startQuiz(topic);
    });
});

// Initialize the application
showLandingPage();
